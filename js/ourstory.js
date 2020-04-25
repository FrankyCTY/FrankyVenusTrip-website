$(document).ready(function () {
  // START ANIMATION
  const cardside = document.querySelector(".cardside");
  const card = $(".card");

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
});
