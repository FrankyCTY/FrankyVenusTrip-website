const nav = $(".nav");
const openNavBtn = document.querySelector(".btn-open-nav");
const closeNavBtn = document.querySelector(".btn-close-nav");

openNavBtn.addEventListener("click", () => {
  nav.addClass("opened-nav");
});

closeNavBtn.addEventListener("click", () => {
  nav.removeClass("opened-nav");
});

//Floating Nav: _nav.scss
const aucklandSection = $(".section-content--auckland");
const floatNav = $(".navigation");

aucklandSection.waypoint(
  (direction) => {
    if (direction == "down") {
      floatNav.addClass("show");
    } else {
      floatNav.removeClass("show");
    }
  },
  { offset: "-10%" }
);
