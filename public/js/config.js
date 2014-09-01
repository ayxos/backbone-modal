require.config({
  waitSeconds: 0,
  baseUrl: 'public/js',
  paths: {
    // Libraries
    jquery      : "../libs/vendors/jquery/jquery",
    backbone    : '../libs/vendors/backbone-1.1.2/backbone',
    handlebars  : "../libs/vendors/handlebars/handlebars",
    underscore  : "../libs/vendors/underscore/underscore",
    jade        : '../libs/vendors/jade/runtime',
    bootstrap   : '../libs/vendors/bootstrap/bootstrap',
    modal       : '../backbone-simple-modal.min'

  },

  shim: {
    jquery: {
      exports: '$'
    },
    underscore: {
      deps:["jquery"],
      exports: '_'
    },
    backbone: {
      deps:["jquery",'underscore'],
      exports: 'Backbone'
    },
    handlebars: {
      deps: ['backbone'],
      exports: 'Handlebars'
    },
    bootstrap:{
      deps: ['jquery']
    },
    modal:{
      deps:['underscore', 'bootstrap', 'backbone']
    }
  }
});

define(function(require) {
  'use strict';

  var Backbone = require('backbone')
  , AppRouter = require('apps/router')
  ;

  new AppRouter({});

  Backbone.history.start();

});
