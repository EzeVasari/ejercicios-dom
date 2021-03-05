import hamburgerMenu from "./dom/menu-hamburger.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".menu-btn", ".panel", "nav a", ".menu-btn i");
});
