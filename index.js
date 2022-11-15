let currentImage = 2;

function resetTimer(){
    clearInterval(timer);
    setInterval(showcaseSlideShow,5000);
}

setInterval(function(){
    document.getElementById('radio' + currentImage).checked = true;
    currentImage++;
    if(currentImage > 4){
      currentImage = 1;
    }
  }, 5000);

