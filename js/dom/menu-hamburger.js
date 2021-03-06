export default function hamburgerMenu(menuBtn, panel, menuLink, icon) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(menuBtn) || e.target.matches(`${menuBtn} *`)) {
      d.querySelector(panel).classList.toggle("visible");
      cambiarBtn(icon);
    }

    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove("visible");
      cambiarBtn(icon);
    }
  });
}

const cambiarBtn = (icon) => {
  const $icon = document.querySelector(icon);

  if ($icon.classList.contains("fa-bars")) {
    $icon.classList.remove("fa-bars");
    $icon.classList.add("fa-times");
  } else {
    $icon.classList.remove("fa-times");
    $icon.classList.add("fa-bars");
  }
};
