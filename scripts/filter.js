export const filterArray = (FilterOn, checkedArray) => {
  checkedArray.forEach(function (checkbox) {
    const gridItem = checkbox.closest(".grid-item");
    if (FilterOn) {
      gridItem.style.display = "none";
    } else {
      gridItem.style.display = "grid";
    }
  });

  FilterOn = !FilterOn;
  filterbut.innerHTML = FilterOn ? "Hide Completed" : "Show Completed";
  console.log(FilterOn);
}
