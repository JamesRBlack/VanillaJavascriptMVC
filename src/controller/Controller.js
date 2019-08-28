window.onload = function () {
    let view = new View();
    let model = new Model();
    let controller = new Controller(view, model);
    controller.bindListeners();
};


var Controller = function (display, model) {
    this.display = display;
    this.model = model;
};

Controller.prototype = {
    bindListeners: function () {
        let pageOneButton = this.display.getPageOneButton();
        pageOneButton.addEventListener('click', this.method1.bind(this));
    },

    method1: function () {
        this.model.setFirstName('hello')
        this.model.setLastName('hello')
    }
};
