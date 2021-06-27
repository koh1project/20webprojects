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

const isValidEmail = (email: string) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

form.addEventListener('submit', (evt: Event) => {
  evt.preventDefault();

  // username.value === '' ? showError(username, 'Username is required') : showSuccess(username);
  if (username.value === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }

  if (email.value === '') {
    showError(email, 'email is required');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'email is not valid');
  } else {
    showSuccess(email);
  }
  if (password.value === '') {
    showError(password, 'password is required');
  } else {
    showSuccess(password);
  }
  if (password2.value === '') {
    showError(password2, 'password2 is required');
  } else {
    showSuccess(password2);
  }
});
