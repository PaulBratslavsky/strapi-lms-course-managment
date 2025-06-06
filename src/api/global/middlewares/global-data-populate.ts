/**
 * `global-data-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const populateQuery = {
  header: {
    populate: {
      logoText: true,
      logoImage: {
        fields: ["url", "alternativeText", "name"],
      },
      navItems: true,
      cta: true,
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.

  console.log("--------------------------------");
  console.log("From global-data-populate middleware");
  console.log("--------------------------------");

  return async (ctx, next) => {
    strapi.log.info("In global-data-populate middleware.");
    ctx.query = {
      ...ctx.query,
      populate: populateQuery,
    };
    await next();
  };
};
