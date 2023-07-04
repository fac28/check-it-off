import * as constants from "../constants/constants.js";

export const populate = () => {
  // populate page with dummy tasks
  constants.taskData.forEach((task, index) => {
    const clone = document.importNode(constants.taskTemplate.content, true);
    const li = clone.querySelector("li");
    li.querySelector('input[type="checkbox"]').id = `checkbox${index}`;
    li.querySelector("label").setAttribute("for", `checkbox${index}`);
    li.querySelector(".description-column").textContent = task.description;
    li.querySelector(".due-date-column").textContent = task.dueDate;
    li.querySelector(".delete-button").dataset.index = index;

    constants.taskList.appendChild(clone);
    
  });
}
