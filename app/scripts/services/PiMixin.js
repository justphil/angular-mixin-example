(function(app) {
  'use strict';

  // this defines a specific behaviour that we can add to multiple controllers
  app.factory('PiMixin', function() {
    var _mixin = {
      getPi: function() {
        return Math.PI;
      }
    };

    return function(dst) {
      // it might be better to write an own extend function that throws an error if the extension collides
      // with an already defined function
      return angular.extend(dst, _mixin);
    };
  });

})(angular.module('mixin'));