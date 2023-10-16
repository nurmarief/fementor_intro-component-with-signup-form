import './images/index.js';
import './styles/_index.scss';
import $ from 'jquery';

function showValidationUI(isValid, propertyName, errorMessage) {
  const parentElement = $(`[name="${propertyName}"]`, this).closest(
    '.form__form-control-group'
  );
  const errorIconElement = parentElement.find('.form__error-icon');
  const errorMessageElement = parentElement.siblings('.form__error-msg');
  if (isValid) {
    parentElement.removeClass('form__form-control-group_is-invalid');
    errorMessageElement.addClass('form__error-msg_is-hidden');
    errorIconElement.addClass('form__error-icon_is-hidden');
  } else {
    parentElement.addClass('form__form-control-group_is-invalid');
    errorMessageElement.removeClass('form__error-msg_is-hidden');
    errorMessageElement.text(errorMessage);
    errorIconElement.removeClass('form__error-icon_is-hidden');
  }
}

/* eslint prefer-arrow-callback: "off" */
$(function () {
  $('.signup-form').on('submit', function (e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const formProp = Object.keys(formData);

    formProp.forEach(prop => {
      if (prop === 'firstName') {
        const isFirstNameValid = formData[prop].trim() !== '';
        showValidationUI(
          isFirstNameValid,
          prop,
          'Whoops! it looks like you forgot to fill in your first name'
        );
      }
      if (prop === 'lastName') {
        const isLastNameValid = formData[prop].trim() !== '';
        showValidationUI(
          isLastNameValid,
          prop,
          'Whoops! it looks like you forgot to fill in your last name'
        );
      }
      if (prop === 'emailAddress') {
        const emailValidationRegex =
          /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
        const isEmailAddressEmpty = formData[prop].trim() === '';
        const isEmailAddressValid = emailValidationRegex.test(formData[prop]);
        if (isEmailAddressEmpty) {
          showValidationUI(isEmailAddressValid, prop, 'Email can not be empty');
        } else {
          showValidationUI(
            isEmailAddressValid,
            prop,
            'Please provide a valid email address'
          );
        }
      }
      if (prop === 'password') {
        const isPasswordValid = formData[prop].trim() !== '';
        showValidationUI(isPasswordValid, prop, 'password can not be empty');
      }
    });
  });
});
