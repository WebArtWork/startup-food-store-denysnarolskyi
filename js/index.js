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
