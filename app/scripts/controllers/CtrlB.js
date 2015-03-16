(function(app) {
  'use strict';

  app.controller('CtrlB', ParentCtrl);

  function ParentCtrl(PiMixin, RandMixin) {
    PiMixin(this);
    RandMixin(this);

    this.foo = 'CtrlB';
  }

  ParentCtrl.prototype.alert = function() {
    alert(this.getPi());
    alert(this.getRand());
  };

})(angular.module('mixin'));