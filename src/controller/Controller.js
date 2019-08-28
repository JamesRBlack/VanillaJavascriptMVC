window.onload = function () {
    let view = new View();
    let model = new Model();
    controller = new Controller(view, model);
    controller.checkIfConfirmationPage();
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
            this.checkIsPopulated(this.model.getEmail()) &&
            this.validateAustralianPhoneNumber(this.model.getPhoneNumber());
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

    validateAustralianPhoneNumber(phoneNumber) {
        let result = false;
        let phonePattern = /^0[0-8]\d{8}$/g;
        result = phonePattern.test(phoneNumber)

        if (!result) {
            alert("Please enter a correctly formatted AU number");
        }
        return result;
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
    },

    checkIfConfirmationPage() {
        let path = window.location.pathname;
        let page = path.split("/").pop();

        if (page === 'form3.html') {
            this.setConfirmationPageDetail();
        }
    },

    setConfirmationPageDetail() {
        document.getElementById("firstName").value = this.model.getFirstName();
        document.getElementById("lastName").value = this.model.getLastName();
        document.getElementById("email").value = this.model.getEmail();
        document.getElementById("phone").value = this.model.getPhoneNumber();
        document.getElementById("streetNumber").value = this.model.getStreetNumber();
        document.getElementById("streetName").value = this.model.getStreetName();
        document.getElementById("streetType").value = this.model.getStreetType();
        document.getElementById("suburb").value = this.model.getSuburb();
        document.getElementById("postCode").value = this.model.getPostCode();
    }

};
