"use strict";

const {getPluginService, parseParams} = require("../../utils/functions");
const {isEmpty, isNil, isNumber, parseInt} = require("lodash");
const PluginError = require("../../utils/error");
const {APPROVAL_STATUS, REGEX} = require("../../utils/constants");

module.exports = ({strapi}) => ({
    getCommonService() {
        return getPluginService("common");
    },

    // Config
    async config(viaSettingsPage = false) {
        const pluginStore = await this.getCommonService().getPluginStore();
        const config = await pluginStore.get({key: "config"});
        const additionalConfiguration = {
            regex: Object.keys(REGEX).reduce(
                (prev, curr) => ({
                    ...prev,
                    [curr]: REGEX[curr].toString(),
                }),
                {}
            ),
        };

        const isGQLPluginEnabled = !isNil(strapi.plugin("graphql"));

        if (config) {
            return {
                ...config,
                ...additionalConfiguration,
                isGQLPluginEnabled: viaSettingsPage ? isGQLPluginEnabled : undefined,
            };
        }
        const allRegions = this.getCommonService().getLocalConfig("allRegions");
        const refreshTokens = this.getCommonService().getLocalConfig("refreshTokens");
        const regions = this.getCommonService().getLocalConfig("regions");
        const spAPIEndPoints = this.getCommonService().getLocalConfig("spAPIEndPoints");
        const credentials = this.getCommonService().getLocalConfig("credentials");
        const approvalFlow = this.getCommonService().getLocalConfig("approvalFlow");
        const result = {
            approvalFlow,
            refreshTokens,
            allRegions,
            regions,
            spAPIEndPoints,
            credentials,
            ...additionalConfiguration,
        };

        if (viaSettingsPage) {
            const moderatorRoles = this.getCommonService().getLocalConfig("moderatorRoles");
            return {
                ...result,
                moderatorRoles,
                isGQLPluginEnabled,
            };
        }
        return result;
    },

    async updateConfig(body) {
        const pluginStore = await this.getCommonService().getPluginStore();
        await pluginStore.set({key: "config", value: body});
        return this.config();
    },

    async restoreConfig() {
        const pluginStore = await this.getCommonService().getPluginStore();
        await pluginStore.delete({key: "config"});
        return this.config();
    },

    async restart() {
        setImmediate(() => strapi.reload());
    },
});
