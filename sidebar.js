const items = document.querySelectorAll(".sidebar-item");
const content = document.getElementById("content");

const data = [
  {
    img: "images/network.png",
    label: "/ NETWORK",
    title: "The Most Advanced NDR Solutions",
    text: "A complete solution for prevention, detection, and response to known and unknown threats.",
    button: "Explore Network Security"
  },
  {
    img: "images/email.png",
    label: "/ EMAIL",
    title: "Secure Your Email Communication",
    text: "Advanced email protection against phishing and malware attacks.",
    button: "Explore Email Security"
  },
  {
    img: "images/cloud.png",
    label: "/ CLOUD",
    title: "Protect Your Cloud Infrastructure",
    text: "Comprehensive cloud security across platforms and services.",
    button: "Explore Cloud Security"
  },
  {
    img: "images/ot.png",
    label: "/ OT",
    title: "Operational Technology Security",
    text: "Safeguard your industrial systems from cyber threats.",
    button: "Explore OT Security"
  },
  {
    img: "images/identity.png",
    label: "/ IDENTITY",
    title: "Identity and Access Management",
    text: "Control access and protect identities across your environment.",
    button: "Explore Identity Security"
  },
  {
    img: "images/endpoint.png",
    label: "/ ENDPOINT",
    title: "Endpoint Detection & Response",
    text: "Ensure endpoint protection with real-time threat monitoring.",
    button: "Explore Endpoint Security"
  }
];

// Event delegation version (for scalability)
document.querySelector(".sidebar").addEventListener("click", (e) => {
  const item = e.target.closest(".sidebar-item");
  if (!item) return;

  // Update active class
  items.forEach(i => i.classList.remove("active"));
  item.classList.add("active");

  const index = Number(item.dataset.index);
  const entry = data[index];

  if (!entry) return;

  content.innerHTML = `
    <p class="sidebar-content-header">
      <img src="${entry.img}" class="content-image" /> ${entry.label}
    </p>
    <p class="sidebar-content-title">${entry.title}</p>
    <p class="sidebar-content-text">${entry.text}</p>
    <button class="content-button">
      ${entry.button}
      <span class="content-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 17l5-5-5-5v10z" />
        </svg>
      </span>
    </button>
  `;
});
