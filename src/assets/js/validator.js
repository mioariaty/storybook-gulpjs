'use strict';
const Validator = function (formId) {
  this.formElement = document.querySelector(formId.formElement);
  this.inputFields = Array.from(this.formElement.querySelectorAll(formId.inputFields));
  this.ok = 1;
  this.currentField;
};
// public methods
Validator.prototype = {
  init: function () {
    // find all the inputs have required attribute
    this.inputFields.forEach((e) => {
      const requiredFields = e.getAttribute('require');
      this.getRequiredFiels(requiredFields);
    });
  },
  getRequiredFiels: function (e) {
    this.inputFields.forEach((field) => {});
  },
};
Validator.methods = {};
// private methods

const testform1 = new Validator({
  formElement: '#form1',
  inputFields: '.input-control',
}).init();
