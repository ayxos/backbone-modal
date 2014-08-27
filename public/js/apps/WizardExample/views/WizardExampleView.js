define(function(require) {
  'use strict';

  /**
  * Module wizard Base init view
  * path: apps/wizard/views/wizard
  * @class wizard
  */

  var Backbone = require('backbone')

  // templates
  , template = require('tpl/apps/WizardExample/templates/exampleTpl')

  // just for test
  , Backbone_modal = require('modal')
  //Steps
  , ExternalView = require('apps/WizardExample/views/externalView')

  ;

  return Backbone.View.extend({

    events:{
      'click [data-action="openModal"]':'openModal'
    },


    /**
    * Add initialize init
    * @name class.initialize
    * @class DictionariesBaseView
    * @constructor
    */

    initialize:function () {
      this.template = template;
      console.log('init BaseView' );
    },

    render:function () {
      console.log('rendering....' );
      $(this.el).html(this.template() );
      return this;
    },

    openModal:function(){
      new Backbone_modal(ExternalView);
    }

  });

});