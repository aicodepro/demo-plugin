"use strict";

module.exports = {
    render: function (uid) {
        return `plugin::seo-plugin.${uid}`;
    },
    "seo-plugin": {
        read: "read",
        moderate: "moderate",
    },
    reports: {
        read: "reports.read",
        action: "reports.action",
    },
    settings: {
        read: "settings.read",
        change: "settings.change",
    },
};
