const video = document.getElementById("promoVideo");
const section = document.getElementById("videoSection");

function isVideo50PercentVisible() {
  const rect = section.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const sectionHeight = rect.height;
  const visibleHeight =
    Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);

  return visibleHeight / sectionHeight >= 0.5;
}

function checkVisibilityAndPlay() {
  if (isVideo50PercentVisible()) {
    video.play();
  } else {
    video.pause();
  }
}

window.addEventListener("scroll", checkVisibilityAndPlay);
window.addEventListener("resize", checkVisibilityAndPlay);
document.addEventListener("DOMContentLoaded", checkVisibilityAndPlay);
