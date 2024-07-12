const feedbackForm = document.querySelector('.feedback-form');

const LOCAL_KEY = 'feedback-form-state';
const formData = loadFromLs(LOCAL_KEY) || {
  email: '',
  message: '',
};

feedbackForm.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();

  saveToLs(LOCAL_KEY, formData);
});

document.addEventListener('DOMContentLoaded', () => {
  const userData = loadFromLs(LOCAL_KEY);

  feedbackForm.elements.email.value = userData?.email || '';
  feedbackForm.elements.message.value = userData?.message || '';
});

feedbackForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const email = feedbackForm.elements.email.value.trim();
  const message = feedbackForm.elements.message.value.trim();
  if (email === '' || message === '') return alert('Fill please all fields');

  console.log(formData);
  localStorage.removeItem(LOCAL_KEY);
  feedbackForm.reset();
}

function saveToLs(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

function loadFromLs(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}
