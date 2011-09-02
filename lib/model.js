(function() {
  var Model;
  module.exports = Model = (function() {
    function Model() {}
    Model.prototype.data = [];
    Model.prototype["new"] = function() {};
    Model.prototype.save = function() {};
    Model.prototype.update = function() {};
    Model.prototype["delete"] = function() {};
    Model.prototype.all = function() {};
    Model.prototype.getBy = function(param, value) {
      return {
        param: param,
        value: value
      };
    };
    return Model;
  })();
}).call(this);
