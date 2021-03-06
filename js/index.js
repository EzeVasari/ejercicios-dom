import hamburgerMenu from "./dom/menu-hamburger.js";
import relojAlarma from "./dom/reloj-alarma.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".menu-btn", ".panel", "nav a", ".menu-btn i");
  relojAlarma("#reloj", "#clock-btn", "#alarm-btn", "#alarm-audio");
});
