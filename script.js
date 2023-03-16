const name = document.getElementById('name');
const weight = document.getElementById('weight');
const age = document.getElementById('age');
const email = document.getElementById('email');
const submit = document.getElementById('submitBtn');
const video = document.getElementById('video');
const form = document.getElementById('form');

const errorName = document.getElementById('error_name');
const errorAge = document.getElementById('error_age');
const errorWeight = document.getElementById('error_weight');
const errorEmail = document.getElementById('error_email');

// set errors and thanks video to hidden on page load
errorName.classList.add('hidden');
errorAge.classList.add('hidden');
errorWeight.classList.add('hidden');
errorEmail.classList.add('hidden');
video.classList.add('hidden');

// check to make sure each input is valid and show error msg if not
const formValidate = () => {
  if (name.value == '') {
    errorName.classList.remove('hidden');
  } else {
    errorName.classList.add('hidden');
  }
  if (weight.value != '' && !/\d+/.test(weight.value)) {
    errorWeight.classList.remove('hidden');
  } else {
    errorWeight.classList.add('hidden');
  }
  if (age.value != '' && !/\d+/.test(age.value)) {
    errorAge.classList.remove('hidden');
  } else {
    errorAge.classList.add('hidden');
  }
  if (
    email.value != '' &&
    !email.value.match(/^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/)
  ) {
    errorEmail.classList.remove('hidden');
  } else {
    errorEmail.classList.add('hidden');
  }

  // Add a condition to check if all the required fields are filled in
  const allFieldsFilled =
    name.value != '' &&
    weight.value != '' &&
    age.value != '' &&
    email.value != '';
  // check to see if any of the inputs had an error msg, if not hide form and show thanks video
  if (
    !allFieldsFilled ||
    !errorName.classList.contains('hidden') ||
    !errorAge.classList.contains('hidden') ||
    !errorWeight.classList.contains('hidden') ||
    !errorEmail.classList.contains('hidden')
  ) {
    video.classList.add('hidden');
  } else {
    video.classList.remove('hidden');
    form.classList.add('hidden');
  }
};

// hides error msgs upon reentering so can submit and test again
name.addEventListener('input', () => {
  if (name.value != '') {
    errorName.classList.add('hidden');
  }
});

weight.addEventListener('input', () => {
  if (weight.value != '' && /\d+/.test(weight.value)) {
    errorWeight.classList.add('hidden');
  }
});

age.addEventListener('input', () => {
  if (age.value != '' && /\d+/.test(age.value)) {
    errorAge.classList.add('hidden');
  }
});

email.addEventListener('input', () => {
  if (
    email.value != '' &&
    email.value.match(/^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/)
  ) {
    errorEmail.classList.add('hidden');
  }
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
  formValidate();
});

// run validator upon submit
submit.addEventListener('click', formValidate);
