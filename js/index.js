console.log("Hello World");
function showDetails(detailsId) {
  var detailsContainers = document.querySelectorAll(".details-container");
  detailsContainers.forEach(function (container) {
    container.classList.remove("active");
  });

  document.getElementById(detailsId).classList.add("active");

  var listItems = document.querySelectorAll(".list-item");
  listItems.forEach(function (item) {
    item.classList.remove("active");
  });

  event.currentTarget.classList.add("active");
}
function toggleOptions() {
  const customSelect = document.getElementById("custom-select");
  customSelect.classList.toggle("open");
}

function selectOption(value) {
  const selectStyled = document.querySelector(".select-styled");
  const selectOptions = document.querySelector(".select-options");
  const select = document.getElementById("cars");

  select.value = value;
  selectStyled.textContent = value;
  selectOptions.style.display = "none";
  document.getElementById("custom-select").classList.remove("open");
}
window.addEventListener("resize", function () {
  if (window.innerWidth < 1000) {
    var screenWidth = window.innerWidth;
    var container = document.querySelector(".container");

    // Змінюємо max-width на значення ширини екрана
    container.style.maxWidth = screenWidth + "px";
  }
});
