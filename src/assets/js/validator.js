const Validator = function (options) {
  this.formElement = document.querySelector(options.formElement);
  this.selectorRules = {};
  this.errorMsg;

  console.log(this.formElement);
};
// public methods
Validator.prototype = {
  getParent: function (element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  },
  validate: function (inputElement, rule) {
    const errorElement = this.getParent(inputElement, options.formGroupSelector).querySelector(
      options.errorSelector,
    );
  },
};

// private methods
function isRequired(selector, message) {
  return {
    selector,
    test: function (value) {
      return value ? undefined : message || 'Vui lòng nhập trường này';
    },
  };
}

const testform1 = new Validator({
  formElement: '#form3',
  formGroupSelector: '.form__item',
  errorSelector: '.form-message',
});
