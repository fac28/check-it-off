import * as constants from "../constants/constants.js";

export const handleSubmit = () => {
  if (constants.toDo.checkValidity() && constants.date.checkValidity()) {
    const toDoText = constants.toDo.value;
    const dateText = constants.date.value;

    // append new task to taskData
    constants.taskData.push({
      description: toDoText,
      dueDate: dateText,
      completed: false });

    // Create the new list item
    const newLi = document.createElement("li");
    newLi.classList.add("grid-item");

    // Create the checkbox column
    const newInput = document.createElement("input");
    newInput.setAttribute("type", "checkbox");
    newInput.setAttribute("id", toDoText);
    const newSpan1 = document.createElement("span");
    newSpan1.classList.add("checkbox-column");
    newSpan1.appendChild(newInput);

    // Create the description column
    const newLabel = document.createElement("label");
    newLabel.setAttribute("for", toDoText);
    newLabel.textContent = toDoText;
    const newSpan2 = document.createElement("span");
    newSpan2.classList.add("description-column");
    newSpan2.appendChild(newLabel);

    // Create the due date column
    const newSpan3 = document.createElement("span");
    newSpan3.classList.add("due-date-column");
    newSpan3.textContent = dateText;

    // Create the delete button
    const newButton = document.createElement("button");
    newButton.classList.add("delete-button");
    newButton.textContent = "Delete";
    const newSpan4 = document.createElement("span");
    newSpan4.classList.add("delete-button");
    newSpan4.appendChild(newButton);

    // Append the elements to the list item
    newLi.appendChild(newSpan1);
    newLi.appendChild(newSpan2);
    newLi.appendChild(newSpan3);
    newLi.appendChild(newSpan4);

    // Append the new list item to the list
    constants.taskList.appendChild(newLi);

    // Clear the text input and date input
    constants.toDo.value = "";
    constants.date.value = "";

  } else {
    // If the required fields are not filled in, show the validation error messages
    constants.toDo.reportValidity();
    constants.date.reportValidity();
  }
};
