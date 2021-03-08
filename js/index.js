import hamburgerMenu from "./dom/menu-hamburger.js";
import relojAlarma from "./dom/reloj-alarma.js";
import { moveBall } from "./dom/eventos-teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".menu-btn", ".panel", "nav a", ".menu-btn i");
  relojAlarma("#reloj", "#clock-btn", "#alarm-btn", "#alarm-audio");
});

d.addEventListener("keydown", (e) => {
  //Cuando se apreta una tecla
  moveBall(e, ".ball", ".stage");
});
