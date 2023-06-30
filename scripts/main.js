import * as constants from "./constants/constants.js";

// populate page with dummy tasks
constants.taskData.forEach((task, index) => {
  const clone = document.importNode(constants.taskTemplate.content, true);
  const li = clone.querySelector('li');
  li.querySelector('input[type="checkbox"]').id = `checkbox${index}`;
  li.querySelector('label').setAttribute('for', `checkbox${index}`);
  li.querySelector('.description-column').textContent = task.description;
  li.querySelector('.due-date-column').textContent = task.dueDate;
  li.querySelector('.delete-button').dataset.index = index;

  constants.taskList.appendChild(clone);
});

constants.addButton.addEventListener('click', function() {
  handleSubmit();
});

//filter items on click of filter button
let FilterOn = false;
let filterbut =document.querySelector("#filter-btn");
let gridItemsList = document.querySelectorAll(".grid-item");

let gridItemarray = Array.from(gridItemsList);
filterbut.addEventListener('click', function() {
let completedarray = gridItemarray.filter(function(div) {
  let divCheckboxes = div.querySelectorAll('input[type="checkbox"]');
  for (let i = 0; i < divCheckboxes.length; i++) {
    if (divCheckboxes[i].checked) {
      return true;
    }
  }

  return false;
});
if(FilterOn == true){
  completedarray.forEach( function(e){
    e.style.display = "grid";
 });
 completedarray = [];
 filterbut.innerHTML ="Hide Completed"
 console.log("ran1");

}
if(FilterOn == false){
completedarray.forEach( function(e){
   e.style.display = "none";

});
filterbut.innerHTML ="Show Completed"

console.log("ran2");
}


FilterOn = !FilterOn;
console.log(FilterOn);
});

//filters out items ticked when hide completed is on
var checkboxes = document.querySelectorAll('div input[type="checkbox"]');
let checkboxesArr  = Array.from(checkboxes);

checkboxesArr.forEach(function(element){
  element.addEventListener('click', function() {
    let completedarray = gridItemarray.filter(function(div) {
  let divCheckboxes = div.querySelectorAll('input[type="checkbox"]');
  for (let i = 0; i < divCheckboxes.length; i++) {
    if (divCheckboxes[i].checked) {
      return true;
    }
  }

  return false;
});

if (FilterOn == true) {
  completedarray.forEach( function(e){
   e.style.display = "none";

});
}


});

});


const handleSubmit = () =>{

  preventDefault();
  
  const toDoText = constants.toDo.value;
  const dateText = constants.date.value;

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

  const newSpan4 = document.createElement('span');
  newSpan4.classList.add('delete-button');
  const newButton = document.createElement('button');
  newButton.classList.add('delete-button');
  newButton.textContent = 'Delete';
  newSpan4.appendChild(newButton);




  // append the new elements to the list item
  newSpan1.appendChild(newInput);
  newSpan2.appendChild(newLabel);
  newLi.appendChild(newSpan1);
  newLi.appendChild(newSpan2);
  newLi.appendChild(newSpan3);
  newLi.appendChild(newSpan4);

  // append the new list item to the list
  list.appendChild(newLi);

  // update the gridItemarray
  gridItemsList = document.querySelectorAll(".grid-item");
  gridItemarray = Array.from(gridItemsList);

  // clear the text input and date input
  constants.toDo.value = '';
  constants.date.value = '';
}

constants.taskList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-button')) {
    const listItem = event.target.closest('.grid-item');
    listItem.remove();
  }
});
