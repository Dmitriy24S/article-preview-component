const shareBtns = document.querySelectorAll(".share-icon__container");
const shareMenu = document.querySelector(".share-menu");
const authorSection = document.querySelector(".article__author");

const toggleShareMenu = () => {
  shareMenu.classList.toggle("show-element");
  authorSection.classList.toggle("hide-element");
};

shareBtns.forEach((btn) => {
  btn.addEventListener("click", toggleShareMenu);
});
