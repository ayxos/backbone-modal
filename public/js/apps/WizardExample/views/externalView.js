define(function(require) {
  'use strict';

  /**
  * Module wizard Base init view
  * path: apps/wizard/views/wizard
  * @class wizard
  */

  var Backbone = require('backbone')

  // templates
  , template = '<p>this is the external view</p>'

  ;

  return Backbone.View.extend({

    initialize:function () {
      this.template = template;
      console.log('init BaseView' );
    },

    render:function () {
      console.log('rendering....' );
      $(this.el).html( _.template(this.template) );

      return this;
    }

  });

});