const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const answer = toggle.parentElement.nextElementSibling;
    const isVisible = answer.style.display === "block";

    document
      .querySelectorAll(".faq-answer")
      .forEach((ans) => (ans.style.display = "none"));
    document
      .querySelectorAll(".faq-toggle")
      .forEach((btn) => (btn.textContent = "+"));

    if (!isVisible) {
      answer.style.display = "block";
      toggle.textContent = "×";
    }
  });
});
