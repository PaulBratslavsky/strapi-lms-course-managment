/**
 * user-profile router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::user-profile.user-profile', {
  config: {
    find: {
      "middlewares": ["api::user-profile.user-profile"],
    },
    findOne: {
      "middlewares": ["api::user-profile.user-profile"],
    } 
  }
});
