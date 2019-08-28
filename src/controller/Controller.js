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
        let pageTwoButton = this.display.getPageTwoButton();
        pageOneButton.addEventListener('click', this.submitPageOneForm.bind(this));
        pageTwoButton.addEventListener('click', this.submitPageTwoForm.bind(this));
    },

    submitPageOneForm() {
        this.model.setFirstName(document.getElementById("firstName").value);
        this.model.setLastName(document.getElementById("lastName").value);
        this.model.setEmail(document.getElementById("email").value);
        this.model.setPhoneNumber(document.getElementById("phone").value)
    },

    submitPageTwoForm() {
    },

    checkPostCodeInBetween(str, min, max) {
        let n = parseInt(str);
        return (!isNaN(n) && n >= min && n <= max);
    }
}
