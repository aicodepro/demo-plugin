"use strict";
const reportRoute = require("./report");
const issueRoute = require("./issue");

module.exports = {
    type: "content-api",
    routes: [...reportRoute, ...issueRoute],
};
