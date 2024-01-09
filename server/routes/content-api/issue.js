"use strict";

module.exports = [
    {
        method: "GET",
        path: "/issues/:id",
        handler: "issue.findOne",
        config: {
            policies: [],
        },
    },
    {
        method: "GET",
        path: "/issues",
        handler: "issue.find",
        config: {
            policies: [],
        },
    },
    {
        method: "POST",
        path: "/issues",
        handler: "issue.create",
        config: {
            policies: [],
        },
    },
    {
        method: "PUT",
        path: "/issues/:id",
        handler: "issue.update",
        config: {
            policies: [],
        },
    },
];
