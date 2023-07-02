import { addButton, filterbut, toDo, date, taskList } from "../scripts/constants/constants.js";

test("Submitting a new task adds it to the list", () => {
  const expected = "Eat breakfast";
  toDo.value = expected;
  date.value = "2023-07-05";

  var Event = new MouseEvent("click");
  addButton.dispatchEvent(Event);

  // expect last li item in task-list to have text "Eat breakfast"
  const actual = taskList.lastChild.querySelector(".description-column").textContent;

  equal(actual, expected, "last item in task-list should have the correct text");
}
)

test("Checking an entry marks it as complete", () => {
  // I think we should check if taskData is updated
  
  // click on the first checkbox
  const firstCheckbox = taskList.querySelector("input[type=checkbox]");

  var Event = new MouseEvent("click");
  firstCheckbox.dispatchEvent(Event);

  const actual = firstCheckbox.checked;
  const expected = true;

  equal(actual, expected, "first checkbox should be checked");

});
