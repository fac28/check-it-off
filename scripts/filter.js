export const filterArray = (FilterOn, checkedArray) => {
  checkedArray.forEach(function (checkbox) {
    console.log(checkbox)
    const gridItem = checkbox.closest(".grid-item");
    console.log(FilterOn)
    if (FilterOn) {
      gridItem.style.display = "none";
    } else {
      gridItem.style.display = "grid";
    }
  });

  return;
}
