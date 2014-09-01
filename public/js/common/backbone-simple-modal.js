/*!
 * Backbone-modal v1.1.0 (http://http://ayxos.com/backbone-modal/)
 * Copyright 2014 Marco Antonio Pajares Silva.
 * Licensed under MIT
 */

define(function(require) {
  'use strict';

  var Backbone;

  // if exist requireJs
  if (typeof(require) != 'undefined'){
    if(!require('underscore') || !require('backbone')){
      console.log('requireJs shim configuration:\npath-to-lib:{\ndeps:["underscore","backbone", "d3"]\n}');
    }
  }

  if((typeof jQuery == 'function' && typeof jQuery.fn.popover == 'undefined') || (typeof jQuery == 'undefined')){
    alert('you must have bootstrap (above v3) previously installed');
  }

  if(!window._){
    console.log('You need to have underscore previously loaded');
  }
  else{
    _ = window._;
  }
  if(!window.Backbone){
    console.log('You need to have Backbone prevoiusly loaded');
  }
  else{
    Backbone = window.Backbone;
  }

  var template = '<div class="modal-dialog"><div class="modal-content"><div class="modal-body"><button class="close" type="button" data-dismiss="modal" aria-hidden="true">x</button><div id="modal_content"></div></div><div class="modal-footer"><a data-action="closeModal" class="btn"> Close </a></div></div></div>';
  
  return Backbone.View.extend({

    // id: 'base-modal',
    className: 'modal fade',

    events: {
      'hidden': 'teardown',
      'click button#close': 'close',
      'click [data-action="closeModal"]': 'close'
    },

    initialize: function(modalContentView) {
      //console.log('ModalBaseView > modalContentView',modalContentView);

      this.template = template;
      this.modalContentView = modalContentView;
      console.log('init modal base view');
      // _.bindAll(this);
      this.render();
    },

    close: function(){
      this.undelegateEvents();

      this.$el.removeData().unbind(); 

      //Remove view from DOM
      this.remove();  
      Backbone.View.prototype.remove.call(this);
      $('.modal-backdrop').remove();
    },

    show: function() {
      this.$el.modal('show');
    },

    teardown: function() {
      this.$el.data('modal', null);
      this.remove();
    },

    render: function() {
      this.renderView();
      return this;
    },

    renderView: function() {
      $(this.el).html(_.template(this.template));
      // this.$el.modal({show:false}); // dont show modal on instantiation
      console.log("ModalBaseView",this.modalContentView);

      var aux = new this.modalContentView();

      this.$el.find('#modal_content').html(aux.render().el);

      this.show();
    }


  });
  
});