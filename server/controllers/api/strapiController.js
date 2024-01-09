const _ = require("lodash");
const utils = require("@strapi/utils");
const { getService } = require("../../utils");

const sanitizeOutput = (user, ctx, modelKey) => {
    const schema = strapi.getModel(modelKey);
    const { auth } = ctx.state;
    return sanitize.contentAPI.output(user, schema, { auth });
  };
/**
 *  store controller
 */
module.exports = {
  /**
   * Retrieve a store record.
   * @return {Object}
   */
  async findOne(ctx,serviceName,modelKey) {
    const { id } = ctx.params;
    let data = await getService(serviceName).fetch({ id });

    if (data) {
      data = await sanitizeOutput(data, ctx,modelKey);
    }

    ctx.body = data;
  },
   /**
   * Retrieve store records.
   * @return {Object|Array}
   */
  async find(ctx,serviceName,modelKey, next, { populate } = {}) {
    const users = await getService(serviceName).fetchAll(ctx.query.filters, populate);
    ctx.body = await Promise.all(users.map(user => sanitizeOutput(user, ctx,modelKey)));
  },
};
