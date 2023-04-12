/**
 * footer controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::footer.footer', ({ strapi }) =>  ({
  async findOne(ctx) {
    const {id: page_id} = ctx.params;

    const entity = await strapi.entityService.findMany('api::footer.footer', {
      filters: {
        page_id
      },
      populate: 'deep'
    })

    if (entity.length === 0) {
      return ctx.notFound('No footer found with the given place_id.');
    }

    const sanitizedEntity = await this.sanitizeOutput(entity[0], ctx);

    return this.transformResponse(sanitizedEntity);
  }
}));
