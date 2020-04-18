const nav = document.querySelector(".nav");
const openNavBtn = document.querySelector(".btn-open-nav");
const closeNavBtn = document.querySelector(".btn-close-nav");

openNavBtn.addEventListener("click", () => {
  nav.classList.add("opened-nav");
});

closeNavBtn.addEventListener("click", () => {
  nav.classList.remove("opened-nav");
});
