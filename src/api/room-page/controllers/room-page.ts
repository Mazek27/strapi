const { sanitize } = require('@strapi/utils');

module.exports = {
  find: async (ctx) => {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.entityService.search('api::room-page.room-page', ctx.query);
    } else {
      entities = await strapi.entityService.findMany('api::room-page.room-page', ctx.query);
    }

    const model = strapi.getModel('room-page');
    return entities.map((entity) => sanitize(entity, { model }));
  },

  findOneByPlaceAndRoomId: async (ctx) => {
    const { place_id, room_id } = ctx.query;

    if (!place_id || !room_id) {
      return ctx.badRequest('Both place_id and room_id must be provided.');
    }

    console.log({ place_id, room_id })

    const entity = await strapi.entityService.findOne('api::room-page.room-page',1, {
      where: [
        { place_id: place_id },
        { room_id: room_id },
      ],
      populate: 'deep'
    });

    if (!entity) {
      return ctx.notFound('No room page found with the given place_id and room_id.');
    }

    const sanitizedEntity = await sanitize.contentAPI.output(entity);
    return { data: sanitizedEntity }
  },
};
