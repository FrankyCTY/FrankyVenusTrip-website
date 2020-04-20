$(document).ready(() => {
  //Floating Nav: _nav.scss
  const aucklandSection = $(".section-content--auckland");
  const floatNav = $(".navigation");

  const nav_checkbox = $(".navigation__checkbox");

  //Only apply waypoint to the floating navigation when the viewport min-width >= 800px
  const viewport_md = window.matchMedia("(min-width: 800px)");
  aucklandSection.waypoint(
    (direction) => {
      if (direction == "down") {
        floatNav.addClass("show");
      } else {
        if (viewport_md.matches) {
          floatNav.removeClass("show");
          nav_checkbox.prop("checked", false);
        }
      }
    },
    { offset: "10%" }
  );

  const nav = $(".navigation__nav");
  // const nav_btn = $(".navigation__button");
  const nav_items = $(".navigation__item");
  $(nav).click(() => {
    nav_checkbox.prop("checked", false);
  });

  $(nav_items).click(() => {
    event.stopPropagation();
  });
});
