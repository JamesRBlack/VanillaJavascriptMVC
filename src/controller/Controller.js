window.onload = function() {
  var view = new View();
  var model = new Model();
  var controller = new Controller(view, model);
  controller.bindListeners();
};


var Controller = function(display, model) {
  this.display = display;
  this.model = model;
};

Controller.prototype = {
    bindListeners: function () {
        var button = this.display.getButton();
        button.addEventListener('click', this.method1.bind(this));
    },

    method1: function () {

    }
};
