// Opening and closing menu icon when screen is displayed on smaller devices
const menu = document.querySelector("#menu-responsive");
const navbar = document.querySelector(".navbar");
const functionalNav = document.querySelector(".functional-header");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
  navbar.classList.toggle("small-font-size-nav");
  navbar.classList.toggle("large-font-size-nav");
  functionalNav.classList.toggle("small-font-size-nav");
  functionalNav.classList.toggle("large-font-size-nav");
  functionalNav.classList.toggle("active");
}

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
  functionalNav.classList.remove("active");
}

// Opening and closing settings window and restoring to default
const settingsPopup = document.querySelector(".settings-popup");
const settingsBtn = document.querySelector("#settings-button");
const closeSettings = document.querySelector("#close-button");
const restoreBtn = document.querySelector(".restore-button");

settingsBtn.addEventListener("click", () => {
  settingsPopup.showModal();
});

closeSettings.addEventListener("click", () => {
  settingsPopup.close();
});

restoreBtn.addEventListener("click", () => {
  localStorage.removeItem("fontColour");
  localStorage.removeItem("backgroundColour");
  localStorage.setItem("theme", document.body.style.background = "white");
  localStorage.setItem("fontColour", document.body.style.color = "black");
  mediumFont();
});

// Customise options
const smallFontBtn = document.querySelector(".small-font");
const mediumFontBtn = document.querySelector(".medium-font");
const largeFontBtn = document.querySelector(".large-font");
const homeParagraph = document.querySelector("#product-info-para");
const headerFont = document.querySelector("#product-info-header");


function smallFont() {
  localStorage.removeItem("fontSize");
  localStorage.removeItem("fontSizeHeader");
  localStorage.removeItem("fontSizeNav");
  localStorage.setItem("fontSize", "small-font-size");
  localStorage.setItem("fontSizeHeader", "small-font-size-header");
  localStorage.setItem("fontSizeNav", "small-font-size-nav");
  homeParagraph.classList.add(localStorage.getItem("fontSize"));
  homeParagraph.classList.remove("medium-font-size");
  homeParagraph.classList.remove("large-font-size");
  headerFont.classList.add(localStorage.getItem("fontSizeHeader"));
  headerFont.classList.remove("large-font-size-header");
  headerFont.classList.remove("medium-font-size-header");
  navbar.classList.add(localStorage.getItem("fontSizeNav"));
  navbar.classList.remove("large-font-size-nav");
  navbar.classList.remove("medium-font-size-nav");
  functionalNav.classList.add(localStorage.getItem("fontSizeNav"));
  functionalNav.classList.remove("large-font-size-nav");
  functionalNav.classList.remove("medium-font-size-nav");
};

function mediumFont() {
  localStorage.removeItem("fontSize");
  localStorage.removeItem("fontSizeHeader");
  localStorage.removeItem("fontSizeNav");
  localStorage.setItem("fontSize", "medium-font-size");
  localStorage.setItem("fontSizeHeader", "medium-font-size-header");
  localStorage.setItem("fontSizeNav", "medium-font-size-nav");
  homeParagraph.classList.add(localStorage.getItem("fontSize"));
  homeParagraph.classList.remove("small-font-size");
  homeParagraph.classList.remove("large-font-size");
  headerFont.classList.add(localStorage.getItem("fontSizeHeader"));
  headerFont.classList.remove("small-font-size-header");
  headerFont.classList.remove("large-font-size-header");
  navbar.classList.add(localStorage.getItem("fontSizeNav"));
  navbar.classList.remove("small-font-size-nav");
  navbar.classList.remove("large-font-size-nav");
  functionalNav.classList.add(localStorage.getItem("fontSizeNav"));
  functionalNav.classList.remove("small-font-size-nav");
  functionalNav.classList.remove("large-font-size-nav");
};

function largeFont() {
  localStorage.removeItem("fontSize");
  localStorage.removeItem("fontSizeHeader");
  localStorage.removeItem("fontSizeNav");
  localStorage.setItem("fontSize", "large-font-size");
  localStorage.setItem("fontSizeHeader", "large-font-size-header");
  localStorage.setItem("fontSizeNav", "large-font-size-nav");
  homeParagraph.classList.add(localStorage.getItem("fontSize"));
  homeParagraph.classList.remove("small-font-size");
  homeParagraph.classList.remove("medium-font-size");
  headerFont.classList.add(localStorage.getItem("fontSizeHeader"));
  headerFont.classList.remove("small-font-size-header");
  headerFont.classList.remove("medium-font-size-header");
  navbar.classList.add(localStorage.getItem("fontSizeNav"));
  navbar.classList.remove("small-font-size-nav");
  navbar.classList.remove("medium-font-size-nav");
  functionalNav.classList.add(localStorage.getItem("fontSizeNav"));
  functionalNav.classList.remove("small-font-size-nav");
  functionalNav.classList.remove("medium-font-size-nav");
};

smallFontBtn.addEventListener("click", () => {
  smallFont();
});

mediumFontBtn.addEventListener("click", () => {
  mediumFont();
});

largeFontBtn.addEventListener("click", () => {
  largeFont();
});

const fontColourSelecter = document.querySelector("#font-colour-input");
const backgroundColourSelecter = document.querySelector("#background-colour-input");
const applyFontColourBtn = document.querySelector("#font-colour-apply-btn");
const applyBackgroundColourBtn = document.querySelector("#background-colour-apply-btn");

applyFontColourBtn.addEventListener("click", () => {
  localStorage.removeItem("fontColour")
  localStorage.setItem("fontColour", document.body.style.color = fontColourSelecter.value);
});

applyBackgroundColourBtn.addEventListener("click", () => {
  localStorage.removeItem("backgroundColour")
  localStorage.setItem("backgroundColour", document.body.style.background = backgroundColourSelecter.value);
});

const themeSelector = document.querySelector("#theme-selector");

themeSelector.addEventListener("change", () => {
  if (themeSelector.value === "light-theme") {
    localStorage.setItem("theme", document.body.style.background = "white");
    localStorage.getItem("theme");
  }
  else {
    localStorage.setItem("theme", document.body.style.background = "grey");
    localStorage.getItem("theme");
    localStorage.removeItem("backgroundColour");
  }
});