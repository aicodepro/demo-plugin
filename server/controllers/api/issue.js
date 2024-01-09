"use strict";

const {createCoreController} = require("@strapi/strapi").factories;
const {SEO_PLUGIN_ISSUE} = require("../../utils/constants");

module.exports = createCoreController(SEO_PLUGIN_ISSUE);
