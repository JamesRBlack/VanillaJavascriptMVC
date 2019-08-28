var View = function () {
    this.pageOneButton = '#submit-page1';
    this.pageTwoButton = '#submit-page2';
};

View.prototype = {
    getPageOneButton: function () {
        return document.querySelector(this.pageOneButton)
    },
    getPageTwoButton: function () {
        return document.querySelector(this.pageTwoButton)
    }
};