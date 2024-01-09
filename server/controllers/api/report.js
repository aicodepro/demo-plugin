"use strict";

const {createCoreController} = require("@strapi/strapi").factories;
const {SEO_PLUGIN_REPORT} = require("../../utils/constants");

module.exports = createCoreController(SEO_PLUGIN_REPORT);
