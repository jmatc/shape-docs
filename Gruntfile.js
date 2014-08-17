module.exports = function(grunt) {
  'use strict';
  var path;
  path = require('path');
  return require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt')
  });
};