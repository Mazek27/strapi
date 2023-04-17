import {factories} from "@strapi/strapi";

const {sanitize} = require('@strapi/utils');

export default factories.createCoreController('api::room-page.room-page', ({strapi}) => ({
  find: async (ctx) => {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.entityService.search('api::room-page.room-page', ctx.query);
    } else {
      entities = await strapi.entityService.findMany('api::room-page.room-page', ctx.query);
    }

    return  await Promise.all(entities.map(async (entity) => {
      return {data: entity}
    }))
  },

  findOne: async (ctx) => {
    const {id: place_id} = ctx.params;
    const {room_id} = ctx.query;

    console.log({place_id, room_id})

    if (!place_id || !room_id) {
      return ctx.badRequest('Both place_id and room_id must be provided.');
    }

    const entity = await strapi.entityService.findMany('api::room-page.room-page', {
      filters: {
        place_id,
        room_id
      },
      populate: 'deep'
    });

    if (entity.length === 0) {
      return ctx.notFound('No room page found with the given place_id and room_id.');
    }

    const sanitizedEntity = await sanitize.contentAPI.output(entity[0]);
    return {data: sanitizedEntity}
  },
}));
