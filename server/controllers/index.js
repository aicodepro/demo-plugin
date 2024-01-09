"use strict";

const admin = require("./admin/index");
const api = require("./api");

module.exports = {
  ...api,
  ...admin
};
