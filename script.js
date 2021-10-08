const shareBtns = document.querySelectorAll(".share-icon__container");
const shareMenu = document.querySelector(".share-menu");
const authorSection = document.querySelector(".article__author");

// Mobile share btn functionality, activate css classes
const toggleShareMenuMobile = () => {
  shareMenu.classList.toggle("show-element");
  authorSection.classList.toggle("hide-element");
};
// Desktop share btn functionality, activate css classes
const toggleShareMenuDekstop = () => {
  shareMenu.classList.toggle("desktop-menu");
  shareBtns[1].classList.toggle("hide-element");
  shareBtns[0].classList.toggle("active-btn");
};

// Clean up and reset css classes if resize with active share button
const cleanUpFromDekstopToMobileSize = () => {
  shareMenu.classList.remove("desktop-menu");
  shareBtns[1].classList.remove("hide-element");
};
const cleanUpFromMobileToDesktopSize = () => {
  shareMenu.classList.remove("show-element");
  authorSection.classList.remove("hide-element");
};

// Load relative share menu on page load
// mobile share menu
if (window.innerWidth < 1200) {
  shareBtns.forEach((btn) => {
    btn.addEventListener("click", toggleShareMenuMobile);
  });
}
// desktop share menu
if (window.innerWidth > 1200) {
  shareBtns.forEach((btn) => {
    btn.addEventListener("click", toggleShareMenuDekstop);
  });
}

// Check for window resize and switch share menu accordingly
window.addEventListener("resize", function () {
  // check if window resized for desktop share menu
  if (window.innerWidth > 1200) {
    shareBtns.forEach((btn) => {
      btn.addEventListener("click", toggleShareMenuDekstop);
    });
    shareBtns.forEach((btn) => {
      btn.removeEventListener("click", toggleShareMenuMobile);
    });
    cleanUpFromMobileToDesktopSize();
  }
  // check if window resized for mobile share menu
  if (window.innerWidth < 1200) {
    shareBtns.forEach((btn) => {
      btn.addEventListener("click", toggleShareMenuMobile);
    });
    shareBtns.forEach((btn) => {
      btn.removeEventListener("click", toggleShareMenuDekstop);
    });
    cleanUpFromDekstopToMobileSize();
  }
});
