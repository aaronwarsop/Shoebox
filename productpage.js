window.onload = function() {
    
    document.body.style.color = localStorage.getItem("fontColour");
    document.body.style.background = localStorage.getItem("backgroundColour");
    
    if (localStorage.getItem("theme") === "grey" && localStorage.getItem("backgroundColour") === null ) {
      document.body.style.background = "grey";
    }
  }