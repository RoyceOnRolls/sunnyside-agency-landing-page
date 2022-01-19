let menuBtn = document.querySelector("#menu");
let menu = document.querySelector("menu");
let arb = false;
let delay = 750;

menuBtn.onclick = function () {
  if (arb == false) {
    menu.classList.remove("fadeOut", "fadeIn");
    menu.style.display = "block";
    menu.classList.add("fadeIn");
    arb = true;
  } else {
    menu.classList.remove("fadeOut", "fadeIn");
    menu.style.display = "none";
    arb = false;
  }
};
