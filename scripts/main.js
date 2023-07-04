import * as constants from "./constants/constants.js";
import { populate } from "./utils/populate.js";
import { handleSubmit } from "./utils/handleSubmit.js";
import { filterArray } from "./filter.js";

let FilterOn = false;

// populate page with dummy tasks
populate();

// BASIC FUNCTIONALITY

// handle submit
constants.addButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Check if the form is valid
  if (constants.addForm.checkValidity()) {
    handleSubmit();
  } else {
    // If the form is invalid, show the validation error messages
    constants.addForm.reportValidity();
  }
});

// handle delete
constants.taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-button")) {
    const listItem = event.target.closest(".grid-item");
    listItem.remove();
    // Todo: remove data from taskData
  }
});


// FILTER

// Listen for the change event on the checkboxes
constants.taskList.addEventListener("change", function () {
  filterArray(FilterOn, updateCheckedArray());
});

// handle click on the filter button
constants.filterbut.addEventListener("click", function () {
  FilterOn = !FilterOn;
  constants.filterbut.innerHTML = FilterOn ? "Hide Completed" : "Show Completed";

  filterArray(FilterOn, updateCheckedArray());
});

function updateCheckedArray(){
  let checkedArray = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  );
  return checkedArray;
}





// let gridItemsList = document.querySelectorAll(".grid-item");

// let gridItemarray = Array.from(gridItemsList);

// constants.filterbut.addEventListener("click", function () {

//   let completedarray = gridItemarray.filter(function (div) {
//     let divCheckboxes = div.querySelectorAll('input[type="checkbox"]');
//     for (let i = 0; i < divCheckboxes.length; i++) {
//       if (divCheckboxes[i].checked) {
//         return true;
//       }
//     }

//     return false;
//   });

//   if (FilterOn == true) {
//     completedarray.forEach(function (e) {
//       e.style.display = "grid";
//     });
//     completedarray = [];
//     constants.filterbut.innerHTML = "Hide Completed";
//     console.log("ran1");
//   }

//   if (FilterOn == false) {
//     completedarray.forEach(function (e) {
//       e.style.display = "none";
//     });
//     constants.filterbut.innerHTML = "Show Completed";

//     console.log("ran2");
//   }

//   FilterOn = !FilterOn;
//   console.log(FilterOn);
// });

// //filters out items ticked when hide completed is on
// var checkboxes = document.querySelectorAll('div input[type="checkbox"]');
// let checkboxesArr = Array.from(checkboxes);


// checkboxesArr.forEach(function (element) {
//   element.addEventListener("click", function () {
//     let completedarray = gridItemarray.filter(function (div) {
//       let divCheckboxes = div.querySelectorAll('input[type="checkbox"]');
//       for (let i = 0; i < divCheckboxes.length; i++) {
//         if (divCheckboxes[i].checked) {
//           return true;
//         }
//       }

//       return false;
//     });

//     if (FilterOn == true) {
//       completedarray.forEach(function (e) {
//         e.style.display = "none";
//       });
//     }
//   });
// });
