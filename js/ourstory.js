$(document).ready(function () {
  // START ANIMATION

  const cardside1 = document.querySelector(".cardside--1");
  const card1 = $(".card--1");

  const cardside2 = document.querySelector(".cardside--2");
  const card2 = $(".card--2");

  const cardside3 = document.querySelector(".cardside--3");
  const card3 = $(".card--3");
  const tl = new TimelineMax();
  tl.fromTo(
    cardside1,
    1.5,
    { bottom: -50, autoAlpha: 0 },
    { bottom: 0, autoAlpha: 1, ease: Power2.easeInOut }
  )
    .fromTo(
      cardside2,
      1.5,
      { bottom: -50, autoAlpha: 0 },
      { bottom: 0, autoAlpha: 1, ease: Power2.easeInOut },
      "-=1.5"
    )
    .fromTo(
      cardside3,
      1.5,
      { bottom: -50, autoAlpha: 0 },
      { bottom: 0, autoAlpha: 1, ease: Power2.easeInOut },
      "-=1.5"
    )
    .fromTo(
      card1,
      1.5,
      { bottom: -50, autoAlpha: 0 },
      { bottom: 0, autoAlpha: 1, ease: Power2.easeInOut },
      "-=1.5"
    )
    .fromTo(
      card2,
      1.5,
      { bottom: -50, autoAlpha: 0 },
      { bottom: 0, autoAlpha: 1, ease: Power2.easeInOut },
      "-=1.5"
    )
    .fromTo(
      card3,
      1.5,
      { bottom: -50, autoAlpha: 0 },
      { bottom: 0, autoAlpha: 1, ease: Power2.easeInOut },
      "-=1.5"
    );

  // Cards - touch to open
  const cardside_front = document.querySelector(".cardside--front");
  const cardside_back = document.querySelector(".cardside--back");

  const card1 = document.querySelector(".card--1");
  const card2 = document.querySelector(".card--2");
  const card3 = document.querySelector(".card--3");

  card1.addEventListener("touchstart", function () {
    card1.classList.toggle("flipped");
  });

  card2.addEventListener("touchstart", function () {
    card2.classList.toggle("flipped");
  });

  card3.addEventListener("touchstart", function () {
    card3.classList.toggle("flipped");
  });
});
