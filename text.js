const textEl = document.getElementById("movingText");
const boxEl = document.querySelector(".box");

let totalWidth = 0;

function calculateWidth() {
  totalWidth = 0;
  [...textEl.children].forEach((child) => {
    totalWidth += child.offsetWidth;
  });
}

calculateWidth();

let x = 0;

function animate() {
  x -= 0.8;
  if (x <= -textEl.children[0].offsetWidth) {
    const first = textEl.children[0];
    textEl.appendChild(first);
    x += first.offsetWidth;
  }
  textEl.style.left = x + "px";
  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  calculateWidth();
});

animate();
