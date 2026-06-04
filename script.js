document.getElementById("year").textContent = new Date().getFullYear();

window.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    document.body.classList.add("loaded");
  });
});

const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
});

navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  mobileMenu.classList.toggle("open", open);
  mobileMenu.setAttribute("aria-hidden", !open);
  navToggle.setAttribute("aria-expanded", open);
  document.body.style.overflow = open ? "hidden" : "";
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    mobileMenu.classList.remove("open");
    mobileMenu.setAttribute("aria-hidden", "true");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  });
});

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

reveals.forEach((el) => {
  if (!el.closest(".hero")) observer.observe(el);
});

const glow = document.querySelector(".cursor-glow");
if (glow && window.matchMedia("(hover: hover)").matches) {
  document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}

document.querySelectorAll(".btn-resume").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.96)";
    setTimeout(() => {
      btn.style.transform = "";
    }, 150);
  });
});
