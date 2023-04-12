module.exports = {
  async find(params, populate) {
    return await strapi.entityService.findMany('api::room-page.room-page', params, populate);
  },

  async findOne(params, populate) {
    return await strapi.entityService.findOne('api::room-page.room-page', params, populate);
  },

  async search(params) {
    return await strapi.entityService.search('api::room-page.room-page', params);
  },

  async count(params) {
    return await strapi.entityService.count('api::room-page.room-page', params);
  },

  async create(data) {
    return await strapi.entityService.create('api::room-page.room-page', data);
  },

  async update(params, data) {
    return await strapi.entityService.update('api::room-page.room-page', params, data);
  },

  async delete(params) {
    return await strapi.entityService.delete('api::room-page.room-page', params);
  },
};
