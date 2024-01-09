"use strict";

const {createCoreService} = require("@strapi/strapi").factories;
const {SEO_PLUGIN_REPORT} = require("../../utils/constants");

module.exports = createCoreService(SEO_PLUGIN_REPORT);
