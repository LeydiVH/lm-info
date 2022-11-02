function setNavbarBackground() {
  console.log("Hola");
  const navbarContainer = document.getElementById("navbarContainer");
  console.log(navbarContainer);
  navbarContainer.classList.toggle("navbar__container");
}

function showHideButtons() {
  const navbarButtons = document.getElementById("navbarSupportedContent");
  console.log(navbarButtons.classList);
  navbarButtons.classList.toggle("nav__invisible");
}

window.addEventListener("resize", function () {
  if (window.innerWidth <= 768) {
    const navbarButtons = document.getElementById("navbarSupportedContent");
    navbarButtons.classList.remove("show");
  } else {
    const navbarContainer = document.getElementById("navbarContainer");
    navbarContainer.classList.remove("navbar__container");
  }
});

const buttonNavbarMobile = document.getElementById("buttonNavbarMobile");
console.log(buttonNavbarMobile);
buttonNavbarMobile.addEventListener("click", setNavbarBackground);

const buttonNavbarDesktop = document.getElementById("buttonNavbarDesktop");
buttonNavbarDesktop.addEventListener("click", showHideButtons);
