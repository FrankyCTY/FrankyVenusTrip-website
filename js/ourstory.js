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

  const card = document.querySelector(".card");

  const tl2 = new TimelineMax();

  const card_fliped = false;

  card1.addEventListener("touchstart", function () {
    if (card_fliped === false) {
      tl2.fromTo(
        cardside1,
        0.5,
        { rotationY: 0 },
        { rotationY: "180deg", ease: Power2.easeInOut }
      );
    }
    //     .fromTo(
    //       cardside_back,
    //       0.5,
    //       {
    //         rotationY: "180deg",
    //       },
    //       {
    //         rotationY: 0,
    //         ease: Power2.ease,
    //       },
    //       "-=.5"
    //     );

    //   card_fliped = true;
    // } else {
    //   tl2
    //     .fromTo(
    //       cardside_front,
    //       0.5,
    //       { rotationY: "180deg" },
    //       { rotationY: "0deg", ease: Power2.easeInOut }
    //     )
    //     .fromTo(
    //       cardside_back,
    //       0.5,
    //       {
    //         rotationY: "0deg",
    //       },
    //       {
    //         rotationY: "180deg",
    //         ease: Power2.ease,
    //       },
    //       "-=.5"
    //     );

    //   card_fliped = false;
    // }
  });
});
