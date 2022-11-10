let showcaseImagesArr = ['/assets/showcasemenstrainer.jpg','assets/showcasemensformals.jpg','assets/showcasewomenstrainers.jpg','assets/showcasewomensformals.jpg'];
let showcaseImage = document.querySelector(".showcase");
let next = document.querySelector(".next");
let back = document.querySelector(".prev");
let currentImage = 0;

function showcaseSlideShow(){
    showcaseImage.src = showcaseImagesArr[currentImage];
    currentImage += 1;
    if (currentImage >= showcaseImagesArr.length){
        currentImage = 0;
    }
}

timer = setInterval(showcaseSlideShow,3000);

function resetTimer(){
    clearInterval(timer);
    setInterval(showcaseSlideShow,3000);
}

next.addEventListener("click", function(){
    if (currentImage >= showcaseImagesArr.length-1){
        currentImage = 0;
        showcaseImage.src = showcaseImagesArr[currentImage];
    } else {
        currentImage += 1;
        showcaseImage.src = showcaseImagesArr[currentImage];
    }
})

back.addEventListener("click", function(){
    if (currentImage == 0) {
        currentImage = showcaseImagesArr.length-1;
        showcaseImage.src = showcaseImagesArr[currentImage];
    } else {
        currentImage -= 1;
        showcaseImage.src = showcaseImagesArr[currentImage];
    }
})
