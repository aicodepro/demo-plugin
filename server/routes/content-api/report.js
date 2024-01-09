"use strict";

module.exports = [
    {
        method: "GET",
        path: "/reports/:id",
        handler: "report.findOne",
        config: {
            policies: [],
        },
    },
    {
        method: "GET",
        path: "/reports",
        handler: "report.find",
        config: {
            policies: [],
        },
    },
    {
        method: "POST",
        path: "/reports",
        handler: "report.create",
        config: {
            policies: [],
        },
    },
    {
        method: "PUT",
        path: "/reports/:id",
        handler: "report.update",
        config: {
            policies: [],
        },
    },
];
