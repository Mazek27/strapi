/**
 * gallery-page controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::gallery-page.gallery-page', ({ strapi }) =>  ({
  async findOne(ctx) {
    const { id: place_id } = ctx.params;

    const entity = await strapi.entityService.findMany('api::gallery-page.gallery-page', {
      filters: {
        place_id
      },
      populate: 'deep'
    })

    if(entity.length === 0) {
      return ctx.notFound('No gallery data found with the given place_id.');
    }

    const sanitizedEntity = await this.sanitizeOutput(entity[0], ctx);

    return this.transformResponse(sanitizedEntity);
  }
}));
