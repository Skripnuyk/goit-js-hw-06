function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector('#controls>input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesElement = document.querySelector('#boxes');

const createBoxes = amount => {
  const elementsToAdd = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    elementsToAdd.push(div);
  }
  return elementsToAdd;
}

createButton.addEventListener('click', () => {
  let boxesToAdd = createBoxes(inputNumber.value);
  boxesElement.append(...boxesToAdd);
})

const destroyBoxes = () => boxes.innerHTML = '';

destroyButton.addEventListener('click', destroyBoxes);

console.log(inputNumber.value);
