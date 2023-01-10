// Slideshow, scrolls through images every 8seconds
let currentImage = 2;

setInterval(function(){
    document.getElementById("radio" + currentImage).checked = true;
    currentImage++;
    if(currentImage > 4){
      currentImage = 1;
    }
}, 8000);

window.onload = function() {
    homeParagraph.classList.add(localStorage.getItem("fontSize"));
    headerFont.classList.add(localStorage.getItem("fontSizeHeader"));
    navbar.classList.add(localStorage.getItem("fontSizeNav"));
    functionalNav.classList.add(localStorage.getItem("fontSizeNav"));
    document.body.style.color = localStorage.getItem("fontColour");
    document.body.style.background = localStorage.getItem("backgroundColour");
    
    if (localStorage.getItem("theme") === "grey" && localStorage.getItem("backgroundColour") === null ) {
      document.body.style.background = "grey";
    }
  }