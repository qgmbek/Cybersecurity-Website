let currentSlide = 1;
const slideWidth = 430;
const track = document.getElementById("slider-track");
const totalSlides = track.children.length;

function updateSlidePosition() {
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function nextSlide() {
  if (currentSlide < totalSlides - 3) {
    currentSlide++;
    updateSlidePosition();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlidePosition();
  }
}
