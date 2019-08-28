var View = function() {
  this.buttonSelector = '#submit-page1'
};

View.prototype = {
  getButton: function() {
    return document.querySelector(this.buttonSelector)
  }
};