/**
 * `user-profile` middleware
 */

import type { Core } from "@strapi/strapi";

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    
    const entryId = ctx.params.id;
    const user = ctx.state.user;
    const userId = user?.documentId;

    const userData = await strapi
      .documents("plugin::users-permissions.user")
      .findOne({
        documentId: userId,
        populate: {
          userProfile: true,
        }
      });

    const userProfileId = userData.userProfile.documentId;  
    if (entryId !== userProfileId) return ctx.unauthorized(`You can't access this entry`);
    await next();
  };
};
