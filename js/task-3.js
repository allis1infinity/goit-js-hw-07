const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', inputHandler);

function inputHandler(event) {
  const name = event.target.value.trim();

  if (name === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = name;
  }
  event.target.value = name;
}
