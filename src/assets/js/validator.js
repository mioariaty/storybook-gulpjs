const Validator = function (options) {
  this.formElement = document.querySelector(options.formElement);
  this.inputElement = Array.from(this.formElement.querySelectorAll(options.inputElement));
  this.formRules = {};

  this.validatorRules = {
    isRequired: function (value) {
      return value ? undefined : 'Vui lòng nhập trường này';
    },
    isEmail: function (value) {
      const reg = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
      return reg.test(value) ? undefined : 'Vui lòng nhập email';
    },
    minLength: function (min) {
      return (value) => (value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`);
    },
    maxLength: function (max) {
      return (value) => (value.length <= max ? undefined : `Vui lòng nhập tối đa ${max} kí tự`);
    },
  };
};

Validator.prototype = {
  render: function () {
    for (const input of this.inputElement) {
      const rulesAttr = input.getAttribute('rules').split('|');
      console.log(this.formRules[input.name]);
      for (let rule of rulesAttr) {
        if (rule.includes(':')) {
          const ruleInfo = rule.split(':');
          rule = ruleInfo[0];
        }
        if (Array.isArray(this.formRules[input.name])) {
        } else {
          this.formRules[input.name] = this.validatorRules[rule];
        }
      }
    }
  },
};

// example
const testForm1 = new Validator({
  formElement: '#form1',
  inputElement: '.input-control',
}).render();
