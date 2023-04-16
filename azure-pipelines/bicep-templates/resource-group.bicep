targetScope = 'subscription'

@description('Specifies the Azure location where the resource should be created.')
param location string = deployment().location

param resourceGroupName string

@description('Resource tags')
param tags object = {}

//---------------------------------------------------------------------------------------------------------------------

resource rg 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: resourceGroupName
  location: location
  tags: tags
}
