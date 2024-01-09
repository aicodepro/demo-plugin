"use strict";

const getService = (name) => {
  return strapi.plugin("seo-plugin").service(name);
  module.exports = {
    getService,
  };
};
