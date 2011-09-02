(function() {
  var Pages, PagesModel, assert, mongorm;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  mongorm = require('../index');
  assert = require('assert');
  PagesModel = (function() {
    var constructor;
    __extends(PagesModel, mongorm.Model);
    function PagesModel() {
      PagesModel.__super__.constructor.apply(this, arguments);
    }
    constructor = function() {
      this.title = new mongorm.fields.string({
        required: true
      });
      return this.body = new mongorm.fields.text({
        required: true
      });
    };
    return PagesModel;
  })();
  Pages = new PagesModel();
  module.exports = {
    testsExists: function() {
      return assert.isNotNull(Pages, 'Pages should exist');
    },
    testsNewReturnVal: function() {
      return assert.eql(true, Pages["new"]({
        title: "New Page"
      }, 'Pages.new should return true'));
    },
    testsModelGetBy: function() {
      var testValue;
      testValue = {
        param: 'title',
        value: 'New Page'
      };
      return assert.eql(testValue, Pages.getBy('title', 'New Page'), 'output from function should be object');
    }
  };
}).call(this);
