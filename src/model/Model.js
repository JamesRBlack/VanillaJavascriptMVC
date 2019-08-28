let Model = function() {
};

Model.prototype.setFirstName = function(firstName) {
    sessionStorage.setItem('firstName', firstName);
};

Model.prototype.getFirstName = function() {
    return sessionStorage.getItem('firstName');
};

Model.prototype.setLastName = function(lastName) {
    sessionStorage.setItem('lastName', lastName);
};

Model.prototype.getLastName = function() {
    return sessionStorage.getItem('lastName');
};

Model.prototype.setEmail = function(email) {
    sessionStorage.setItem('email', email);
};

Model.prototype.getEmail = function() {
    return sessionStorage.getItem('email');
};

Model.prototype.setPhoneNumber = function(phoneNumber) {
    sessionStorage.setItem('phoneNumber', phoneNumber);
};

Model.prototype.getPhoneNumber = function() {
    return sessionStorage.getItem('phoneNumber');
};

Model.prototype.setStreetNumber = function(streetNumber) {
    sessionStorage.setItem('streetNumber', streetNumber);
};

Model.prototype.getStreetNumber = function() {
    return sessionStorage.getItem('streetNumber');
};

Model.prototype.setStreetName = function(streetName) {
    sessionStorage.setItem('streetName', streetName);
};

Model.prototype.getStreetName = function() {
    return sessionStorage.getItem('streetName');
};

Model.prototype.setStreetType = function(streetType) {
    sessionStorage.setItem('streetType', streetType);
};

Model.prototype.getStreetType = function() {
    return sessionStorage.getItem('streetType');
};

Model.prototype.setSuburb = function(suburb) {
    sessionStorage.setItem('suburb', suburb);
};

Model.prototype.getSuburb = function() {
    return sessionStorage.getItem('suburb');
};

Model.prototype.setPostCode = function(postCode) {
    sessionStorage.setItem('postCode', postCode);
};

Model.prototype.getPostCode = function() {
    return sessionStorage.getItem('postCode');
};