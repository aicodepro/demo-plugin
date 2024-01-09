'use strict';

const admin = require('./admin');

module.exports = {
  type: 'admin',
  routes: [...admin]
};
