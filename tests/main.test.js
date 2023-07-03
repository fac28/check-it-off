import { addButton, toDo, date, taskList } from "../scripts/constants/constants.js";

test("Submitting a new task adds it to the list", () => {
  const expected = "Eat breakfast";
  toDo.value = expected;
  date.value = "2023-07-05";

  var Event = new MouseEvent("click");
  addButton.dispatchEvent(Event);

  // expect last li item in task-list to have text "Eat breakfast"
  const actual = taskList.lastChild.querySelector(".description-column").textContent;

  equal(actual, expected, "last item in task-list should have the correct text");

  const lastDeleteButton = taskList.lastChild.querySelector(".delete-button button");
  lastDeleteButton.click();

}
)

test("Checking an entry marks it as complete", () => {
  // Todo: we should check if taskData is updated

  // click on the first checkbox
  const firstCheckbox = taskList.querySelector("input[type=checkbox]");

  var Event = new MouseEvent("click");
  firstCheckbox.dispatchEvent(Event);

  const actual = firstCheckbox.checked;
  const expected = true;

  equal(actual, expected, "first checkbox should be checked");

});

test("Deleting an entry removes it from the list", () => {

  // adding a new task
  const expected = "Eat Dinner";
  toDo.value = expected;
  date.value = "2023-07-07";
  var Event = new MouseEvent("click");
  addButton.dispatchEvent(Event);

  // click on the last delete button
  const lastDeleteButton = taskList.lastChild.querySelector(".delete-button button");
  lastDeleteButton.click();

  const actual = taskList.lastElementChild.querySelector(".description-column").textContent;

  notEqual(actual, expected, "new task should be deleted");

});
