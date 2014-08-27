define(function(require) {
  'use strict';

  /**
  * Module wizard Base init view
  * path: apps/wizard/views/wizard
  * @class wizard
  */

  var Backbone = require('backbone')

  // templates
  , template = require('tpl/apps/WizardExample/templates/externalTpl')

  ;

  return Backbone.View.extend({

    initialize:function () {
      this.template = template;
      console.log('init BaseView' );
    },

    render:function () {
      console.log('rendering....' );
      $(this.el).html(this.template() );

      return this;
    }

  });

});