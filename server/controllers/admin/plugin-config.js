"use strict";
const _ = require("lodash");
const { getPluginService } = require("../../utils/functions");
const { parseParams, throwError } = require("../utils/functions");

module.exports = {

  getService(name = "admin") {
    return getPluginService(name);
  },

  async config(ctx) {
    try {
      console.log("----");
      return await this.getService().config();
    } catch (e) {
      throwError(ctx, e);
    }
  },

  async settingsConfig(ctx) {
    try {
      return this.getService().config(true);
    } catch (e) {
      throwError(ctx, e);
    }
  },

  async settingsUpdateConfig(ctx) {
    try {
      const {
        request: { body },
      } = ctx;
      return this.getService().updateConfig(body);
    } catch (e) {
      throwError(ctx, e);
    }
  },

  async settingsRestoreConfig(ctx) {
    try {
      return this.getService().restoreConfig();
    } catch (e) {
      throwError(ctx, e);
    }
  },

  async settingsRestart(ctx) {
    try {
      await this.getService().restart();
      return ctx.send({ status: 200 });
    } catch (e) {
      throwError(ctx, e);
    }
  },

  async findOne(ctx) {
    const { params = {}, query } = ctx;
    const { id } = parseParams(params);
    try {
      return await this.getservice().findOneAndThread(id, query);
    } catch (err) {
      throwError(ctx, err);
    }
  },

  getContentsTypes() {
    return Object.entries(strapi.contentTypes)
      .filter(([, contentType]) =>
        (contentType.associations || []).some(
          (_) => _.plugin === "seo-plugin" && _.collection === "seo-plugin"
        )
      )
      .reduce(
        (acc, [, contentType]) => [
          ...acc,
          { key: contentType.globalName, value: contentType.collectionName },
        ],
        []
      );
  },

  async contentTypeName(ctx) {
    const {
      params: { contentTypeName },
    } = ctx;
    try {
      const result = await this.getService().contentTypeName(contentTypeName);
      return { list: result };
    } catch (e) {
      throwError(ctx, e);
    }
  },
};
