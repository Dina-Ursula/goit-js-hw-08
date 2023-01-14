import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const onInputHandle = function () {
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify({
      email: email.value,
      message: message.value,
    })
  );
};

const onFormSubmit = function (evt) {
  evt.preventDefault();

  localStorage.removeItem(LOCAL_STORAGE_KEY);
  console.log({ email: email.value, message: message.value });
  evt.currentTarget.reset();
};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputHandle, 500));

let storage = localStorage.getItem(LOCAL_STORAGE_KEY);
if (storage) {
  storage = JSON.parse(storage);

  email.value = storage.email;
  message.value = storage.message;
}
