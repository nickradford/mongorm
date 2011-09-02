(function() {
  var PageModel, Pages, mongorm;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  mongorm = require('../index');
  PageModel = (function() {
    var constructor;
    __extends(PageModel, mongorm.Model);
    function PageModel() {
      PageModel.__super__.constructor.apply(this, arguments);
    }
    constructor = function() {};
    return PageModel;
  })();
  Pages = new PageModel;
  console.log(Pages.getBy('title', 'New Page'));
}).call(this);
