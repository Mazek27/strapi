/**
 * food-and-drink-page controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::food-and-drink-page.food-and-drink-page', ({ strapi }) =>  ({
  async findOne(ctx) {
    const { id: place_id } = ctx.params;

    const entity = await strapi.entityService.findMany('api::food-and-drink-page.food-and-drink-page', {
      filters: {
        place_id
      },
      populate: 'deep'
    })

    if(entity.length === 0) {
      return ctx.notFound('No food and drink page found with the given place_id.');
    }

    const sanitizedEntity = await this.sanitizeOutput(entity[0], ctx);

    return this.transformResponse(sanitizedEntity);
  }
}));
