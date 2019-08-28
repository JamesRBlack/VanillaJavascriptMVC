window.onload = function () {
    let view = new View();
    let model = new Model();
    controller = new Controller(view, model);
};


var Controller = function (display, model) {
    this.display = display;
    this.model = model;
};

Controller.prototype = {

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
        this.model.setStreetNumber(document.getElementById("streetNumber").value);
        this.model.setStreetName(document.getElementById("streetName").value);
        this.model.setStreetType(document.getElementById("streetType").value);
        this.model.setSuburb(document.getElementById("suburb").value);
        this.model.setPostCode(document.getElementById("postCode").value);
        return this.validatePageTwoForm();
    },

    validatePageTwoForm() {
        return this.checkIsPopulated(this.model.getStreetName()) &&
            this.checkIsPopulated(this.model.getStreetNumber()) &&
            this.checkIsPopulated(this.model.getStreetType()) &&
            this.checkIsPopulated(this.model.getSuburb()) &&
            this.checkPostCodeInBetween(this.model.getPostCode())
    },

    checkIsPopulated(strValue) {
        return strValue && strValue.trim() !== "";
    },

    checkPostCodeInBetween(str) {
        let result = false;
        let min = 800;
        let max = 7999;
        let n = parseInt(str);
        result = !isNaN(n) && n >= min && n <= max;
        if (!result) {
            alert("Post Code is invalid. Must be between 0800-7999")
        }
        return result
    }
};
