function setNavbarBackground() {
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


const galleryAll = document.getElementById('familyGalleryAll');
const galleryParents = document.getElementById('familyGaleryParents');
const galleryBrothers = document.getElementById('familyGalleryBrothers');
const galleryCousins = document.getElementById('familyGalleryCousins');
const galleryGrandparents = document.getElementById('familyGalleryGrandparents');
const galleryUncles = document.getElementById('familyGalleryUncles');
const galleryNephews = document.getElementById('familyGalleryNephews');

const tabAll = document.getElementById('tabAll');
const tabParents = document.getElementById('tabParents');
const tabBrothers = document.getElementById('tabBrothers');
const tabCousins = document.getElementById('tabCousins');
const tabGrandparents = document.getElementById('tabGrandparents');
const tabUncles = document.getElementById('tabUncles');
const tabNephews = document.getElementById('tabNephews');

const galleries = {
  all: galleryAll,
  parents: galleryParents,
  brothers: galleryBrothers,
  cousins: galleryCousins,
  grandparents: galleryGrandparents,
  uncles: galleryUncles,
  nephews: galleryNephews
};

const tabs = {
  all: tabAll,
  parents: tabParents,
  brothers: tabBrothers,
  cousins: tabCousins,
  grandparents: tabGrandparents,
  uncles: tabUncles,
  nephews: tabNephews
};

function showGalleryTab (typeGallery) {
  for (const key in galleries) {
    if(key === typeGallery) {
      if(galleries[key].classList.contains('d-none')) {
        galleries[key].classList.remove('d-none');
      }
      tabs[key].classList.add('family__link--active');
    }
    else {
      if(!galleries[key].classList.contains('d-none')) {
        galleries[key].classList.add('d-none');
      }
      if(tabs[key].classList.contains('family__link--active')) {
        tabs[key].classList.remove('family__link--active');
      }
    }
  }
}

showGalleryTab('all');