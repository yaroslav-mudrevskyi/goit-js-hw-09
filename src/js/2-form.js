const feedbackForm = document.querySelector('.feedback-form');

const formData = { email: '', message: '' };

const LOCAL_KEY = 'feedback-form-state';

feedbackForm.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();

  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
});

function initFormData() {
  const userData = JSON.parse(localStorage.getItem(LOCAL_KEY));
  if (!userData) return;

  const keys = Object.keys(userData);

  keys.forEach(key => {
    feedbackForm.elements[key].value = userData[key];
  });
}

initFormData();

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
