(function(app) {
  'use strict';

  app.controller('CtrlA', ChildCtrl);

  function ChildCtrl(RandMixin) {
    RandMixin(this);
    this.foo = 'CtrlA';
  }

  ChildCtrl.prototype.alert = function() {
    alert(this.getRand());
  };

})(angular.module('mixin'));