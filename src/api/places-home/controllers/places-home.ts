/**
 * places-home controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::places-home.places-home');

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::places-home.places-home', ({ strapi }) =>  ({
  async findOne(ctx) {
    const { id: place_id } = ctx.params;

    const entity = await strapi.entityService.findMany('api::places-home.places-home', {
      filters: {
        place_id
      },
      populate: 'deep'
    })

    if(entity.length === 0) {
      return ctx.notFound('No places-home found with the given place_id.');
    }

    const sanitizedEntity = await this.sanitizeOutput(entity[0], ctx);

    return this.transformResponse(sanitizedEntity);
  }
}));
