'use strict';

/**
 * available-product service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::available-product.available-product');
