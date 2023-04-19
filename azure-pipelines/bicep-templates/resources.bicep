@description('Specifies the Azure location where the key vault should be created.')
param location string = resourceGroup().location

@description('Provide a name for the storage account. Use only lower case letters and numbers. The name must be unique across Azure.')
@minLength(3)
@maxLength(24)
param storageAccountName string = 'arewebsitestrapiuploads'

param appServicePlanName string = 'are-website-strapi-asp'

@allowed([
  'new'
  'existing'
])
param appServiceNewOrExisting string = 'existing'

@description('The App Service resource name')
param appServiceName string = 'are-strapi'

@description('Resource tags')
param tags object = {}

//---------------------------------------------------------------------------------------------------------------------

resource appServicePlan 'Microsoft.Web/serverfarms@2018-02-01' = {
  name: appServicePlanName
  location: location
  kind: 'Linux'
  properties: {
    reserved: true
  }
  sku: {
    name: 'S1'
    capacity: 1
  }
  tags: tags
}

resource storageAccount 'Microsoft.Storage/storageAccounts@2021-04-01' = {
  name: storageAccountName
  location: location
  sku: {
    name: 'Standard_GRS'
  }
  kind: 'StorageV2'
  properties: {
    accessTier: 'Hot'
    encryption: {
      services: {
        blob: {
          enabled: true
        }
        file: {
          enabled: true
        }
      }
      keySource: 'Microsoft.Storage'
    }
    networkAcls: {
      bypass: 'AzureServices'
      defaultAction: 'Allow'
      ipRules: []
      virtualNetworkRules: []
    }
    supportsHttpsTrafficOnly: true
  }
  tags: tags
}

resource blobService 'Microsoft.Storage/storageAccounts/blobServices@2021-09-01' = {
  parent: storageAccount
  name: 'default'
}

resource uploadsContainer 'Microsoft.Storage/storageAccounts/blobServices/containers@2021-09-01' = {
  parent: blobService
  name: 'strapi-uploads'
  properties: {
    publicAccess: 'Blob'
  }
}

resource appService 'Microsoft.Web/sites@2021-03-01' = if (appServiceNewOrExisting == 'new') {
  name: appServiceName
  location: location
  kind: 'app,linux'
  identity: {
    type: 'SystemAssigned'
  }
  properties: {
    enabled: true
    clientAffinityEnabled: false
    httpsOnly: true
    serverFarmId: appServicePlan.id
    siteConfig: {
      alwaysOn: true
      appSettings: [
        {
          name: 'NODE_ENV'
          value: 'production'
        }
        {
          name: 'STORAGE_ACCOUNT'
          value: storageAccount.name
        }
        {
          name: 'STORAGE_ACCOUNT_KEY'
          value: storageAccount.listKeys().keys[0].value
        }
        {
          name: 'STORAGE_CONTAINER_NAME'
          value: uploadsContainer.name
        }
      ]
      linuxFxVersion: 'NODE|16-lts'
    }
  }
}
