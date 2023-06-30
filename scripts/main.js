// target add button
const addButton = document.getElementById('add-btn');
const toDo = document.getElementById('to-do');
const date = document.getElementById('due-date');

const taskData = [
  { description: 'Buy groceries', dueDate: '2023-07-01' },
  { description: 'Feed cat', dueDate: '2023-07-01' }
];

const taskList = document.getElementById('task-list');
const taskTemplate = document.getElementById('task-template');

taskData.forEach((task, index) => {
  const clone = document.importNode(taskTemplate.content, true);
  const li = clone.querySelector('li');
  li.querySelector('input[type="checkbox"]').id = `checkbox${index}`;
  li.querySelector('label').setAttribute('for', `checkbox${index}`);
  li.querySelector('.description-column').textContent = task.description;
  li.querySelector('.due-date-column').textContent = task.dueDate;
  taskList.appendChild(clone);
});

// on click, store the text input and date input
addButton.addEventListener('click', function() {
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
  const toDoText = toDo.value;
  const dateText = date.value;

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
