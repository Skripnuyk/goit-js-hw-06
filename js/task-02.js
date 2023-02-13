const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItems = ingredients.map(item => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = item;
  ingredientsItem.classList.add('item');
  return ingredientsItem;
})

const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...ingredientsItems);