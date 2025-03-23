const form = document.querySelector('.login-form');
// console.log(form);
form.addEventListener('submit', formHandler);

function formHandler(event) {
  event.preventDefault();
  const email = form.elements.email.value.trim();

  const password = form.elements.password.value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  } else {
    console.log('email: ${email}, password: ${password}');
  }
  form.reset();
}
