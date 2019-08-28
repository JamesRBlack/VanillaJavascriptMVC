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
        let pageTwoButton = this.display.getPageTwoButton();
        pageTwoButton.addEventListener('click', this.submitPageTwoForm.bind(this));
    },

    submitPageOneForm() {
        this.model.setFirstName(document.getElementById("firstName").value);
        this.model.setLastName(document.getElementById("lastName").value);
        this.model.setEmail(document.getElementById("email").value);
        this.model.setPhoneNumber(document.getElementById("phone").value);
        return this.validatePageOneForm();
    },

    validatePageOneForm() {
        return this.checkIsPopulated(this.model.getFirstName()) &&
            this.checkIsPopulated(this.model.getLastName()) &&
            this.checkIsPopulated(this.model.getEmail());
    },

    submitPageTwoForm() {
        this.model.setStreetNumber(document.getElementById("lastName").value);
        this.model.setStreetName(document.getElementById("firstName").value);
        this.model.setStreetType(document.getElementById("email").value);
        this.model.setSuburb(document.getElementById("phone").value);
        this.model.setPostCode(document.getElementById("phone").value);
        return this.validatePageTwoForm();
    },

    validatePageTwoForm() {
        return this.checkIsPopulated(this.model.getStreetName()) &&
            this.checkIsPopulated(this.model.getStreetNumber()) &&
            this.checkIsPopulated(this.model.getStreetType()) &&
            this.checkIsPopulated(this.model.getSuburb());
    },

    checkIsPopulated(strValue) {
        return strValue && strValue.trim() !== "";
    },

    checkPostCodeInBetween(str, min, max) {
        let n = parseInt(str);
        return (!isNaN(n) && n >= min && n <= max);
    }
}
