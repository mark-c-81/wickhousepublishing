import createAuthorGrid from "./authorGrid";

const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

createAuthorGrid();
