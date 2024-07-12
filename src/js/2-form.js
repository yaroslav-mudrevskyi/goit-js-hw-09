const feedbackForm = document.querySelector('.feedback-form');

const LOCAL_KEY = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {
  email: '',
  message: '',
};

feedbackForm.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();

  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
});

document.addEventListener('DOMContentLoaded', () => {
  const userData = JSON.parse(localStorage.getItem(LOCAL_KEY));

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
