const clockDisplay = document.querySelector('.clock');
setInterval ( 
    () => (clockDisplay.innerText = new Date().toLocaleTimeString()),
1000
);



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  setTimeout(showSlides, 4000);
}





let pictureIndex = 1;
showPicture(pictureIndex);

// Next/previous controls
function plusPicture(n) {
    showPicture(pictureIndex += n);
}

// Thumbnail image controls
function currentPicture(n) {
    showPicture(pictureIndex = n);
}

function showPicture(n) {
  let i;
  let pictures = document.getElementsByClassName("myPictures");
  if (n > pictures.length) {pictureIndex = 1} 
  if (n < 1) {pictureIndex = pictures.length}
  for (i = 0; i < pictures.length; i++) {
    pictures[i].style.display = "none"; 
  }

  pictures[pictureIndex-1].style.display = "block"; 
}



