const form = document.getElementById('form') as HTMLFormElement;
const username = document.getElementById('username') as HTMLInputElement;
const email = document.getElementById('email') as HTMLInputElement;
const password = document.getElementById('password') as HTMLInputElement;
const password2 = document.getElementById('password2') as HTMLInputElement;

const showError = (input: HTMLInputElement, message: string) => {
  const formControl = input.parentElement;
  formControl.className = `${formControl.className} error`;
  const small = formControl.querySelector('small') as HTMLElement;
  small.innerHTML = message;
};

const showSuccess = (input: HTMLInputElement) => {
  const formControl = input.parentElement;
  formControl.className = `${formControl.className} success`;
};

const checkRequired = (inputArray: HTMLInputElement[]) => {
  inputArray.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};

const checkLength = (input: HTMLInputElement, min: number, max: number) => {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be at less than ${max} characters`);
  } else {
    showSuccess(input);
  }
};

const getFieldName = (input: HTMLInputElement) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

const checkEmail = (input: HTMLInputElement) => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // return regex.test(String(email).toLowerCase());

  if (regex.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
};

form.addEventListener('submit', (evt: Event) => {
  evt.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
});
