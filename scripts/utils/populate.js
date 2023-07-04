import * as constants from "../constants/constants.js";

export const populate = () => {
  // populate page with dummy tasks
  constants.taskData.forEach((task, index) => {
    const clone = document.importNode(constants.taskTemplate.content, true);
    const li = clone.querySelector("li");
    const checkbox = li.querySelector('input[type="checkbox"]');

    checkbox.id = `checkbox${index}`;
    checkbox.tabIndex = index * 3 + 5;

    li.querySelector("label").setAttribute("for", `checkbox${index}`);

    const descriptionColumn = li.querySelector(".description-column");
    descriptionColumn.textContent = task.description;
    descriptionColumn.tabIndex = index * 3 + 6;

    const dueDateColumn = li.querySelector(".due-date-column");
    dueDateColumn.textContent = task.dueDate;
    dueDateColumn.tabIndex = index * 3 + 7;

    li.querySelector(".delete-button").tabIndex = index * 3 + 8;

    constants.taskList.appendChild(clone);

  });
}
