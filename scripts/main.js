// target add button
const addButton = document.getElementById('add-btn');
const toDo = document.getElementById('to-do');
const date = document.getElementById('due-date');

// on click, store the text input and date input
addButton.addEventListener('click', function() {
  const toDoText = toDo.value;
  const dateText = date.value;

  // create a new list item
  const newListItem = document.createElement('li');
  newListItem.textContent = toDoText + ' ' + dateText;

  // add the new list item to the list
  const list = document.getElementById('task-list');

  // create new li element with class of grid-item
  const newLi = document.createElement('li');
  newLi.classList.add('grid-item');

  // create new span element with class of checkbox-column
  const newSpan1 = document.createElement('span');
  newSpan1.classList.add('checkbox-column');

  // create new input element with type checkbox
  const newInput = document.createElement('input');
  newInput.setAttribute('type', 'checkbox');
  newInput.setAttribute('id', toDoText);

  // create new span element with class of description-column
  const newSpan2 = document.createElement('span');
  newSpan2.classList.add('description-column');

  // create new label element with for checkbox
  const newLabel = document.createElement('label');
  newLabel.setAttribute('for', toDoText);
  newLabel.textContent = toDoText;

  // create new span element with class of due-date-column
  const newSpan3 = document.createElement('span');
  newSpan3.classList.add('due-date-column');
  newSpan3.textContent = dateText;

  // append the new elements to the list item
  newSpan1.appendChild(newInput);
  newSpan2.appendChild(newLabel);
  newLi.appendChild(newSpan1);
  newLi.appendChild(newSpan2);
  newLi.appendChild(newSpan3);

  // append the new list item to the list
  list.appendChild(newLi);



  // clear the text input and date input
  toDo.value = '';
  date.value = '';
}
);
