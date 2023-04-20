/**
 * contact-page controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::contact-page.contact-page', ({ strapi }) =>  ({
  async findOne(ctx) {
    const { id: place_id } = ctx.params;

    const entity = await strapi.entityService.findMany('api::contact-page.contact-page', {
      filters: {
        place_id
      },
      populate: 'deep'
    })

    if(entity.length === 0) {
      return ctx.notFound('No contact data found with the given place_id.');
    }

    const sanitizedEntity = await this.sanitizeOutput(entity[0], ctx);

    return this.transformResponse(sanitizedEntity);
  }
}));