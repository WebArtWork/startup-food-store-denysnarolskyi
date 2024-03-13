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
function details(name){
	if(name === 'drinks'){
		return 'drinkDetails'
	}else{
		return 'mealsDetails'
	}
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

function activeDetails(detailsId) {
  // Отримайте всі елементи з класом "list-item"
  var listItems = document.querySelectorAll(".list-item first");

  // Знайдіть активний елемент та видаліть його клас "active"
  var activeItem = document.querySelector(".list-item.active");

  // Знайдіть елемент за допомогою переданого ідентифікатора та додайте йому клас "active"
  var targetItem = document.querySelector("#" + detailsId);
  if (targetItem) {
    targetItem.classList.add("active");
  }
}
function openModal() {
  document.getElementById("modalBackground").style.display = "block";
  document.getElementById("modalWindow").style.display = "block";
}

// Функція для закриття модального вікна
function closeModal() {
  document.getElementById("modalBackground").style.display = "none";
  document.getElementById("modalWindow").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
  // Знаходимо елемент "ЇЖА"
  var firstListItem = document.querySelector(".list-item.first");

  // Додаємо клас "active" до знайденого елементу
  firstListItem.classList.add("active");
});
