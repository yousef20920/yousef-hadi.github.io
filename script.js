// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Sticky header shadow on scroll
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Highlight active nav link based on scroll position
const sections = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll(".nav-links a");

function updateActiveLink() {
  const scrollY = window.scrollY + 80;
  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        links.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    }
  });
}

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();

// Fade-in animation for section elements using IntersectionObserver
const fadeTargets = document.querySelectorAll(
  ".skill-card, .project-card, .contact-card, .about-text, .hero-content"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

fadeTargets.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(el);
});
