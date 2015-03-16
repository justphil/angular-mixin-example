(function(app) {
  'use strict';

  // this defines a specific behaviour that we can add to multiple controllers
  app.factory('RandMixin', function() {
    var _mixin = {
      getRand: function() {
        // it's possible to use this in a mixin function and it'll be resolved with the appropriate
        // object when called in the context of a controller
        return this.foo + ': ' + Math.random();
      }
    };

    return function(dst) {
      // it might be better to write an own extend function that throws an error if the extension collides
      // with an already defined function
      return angular.extend(dst, _mixin);
    };
  });

})(angular.module('mixin'));