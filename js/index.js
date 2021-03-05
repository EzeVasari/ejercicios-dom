const $menuLink = document.getElementById("menu"),
  $panel = document.querySelector(".panel"),
  $icon = document.querySelector(".fa-bars");

$menuLink.addEventListener("click", (e) => {
  $panel.classList.toggle("no-visible");
});
