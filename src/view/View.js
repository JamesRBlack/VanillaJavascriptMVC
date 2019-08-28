var View = function() {
  this.buttonSelector = 'button'
};

View.prototype = {
  getButton: function() {
    return document.querySelector(this.buttonSelector)
  }
};