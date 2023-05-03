'use strict';

exports.exports = {};
var lodash = {
  get exports(){ return exports.exports; },
  set exports(v){ exports.exports = v; },
};

exports.__module = lodash;
