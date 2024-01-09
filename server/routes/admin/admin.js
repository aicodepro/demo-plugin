"use strict";

module.exports = [
  {
    method: "GET",
    path: "/settings/config",
    handler: "admin.config",
    config: {
      policies: [],
    },
  },
  {
    method: "PUT",
    path: "/settings/config",
    handler: "admin.settingsUpdateConfig",
    config: {
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/settings/config/content-types/:contentTypeName",
    handler: "admin.contentTypeName",
    config: {
      policies: [],
    },
  }
];
