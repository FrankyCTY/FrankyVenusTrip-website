$(document).ready(function () {
  const hero = $(".hero");
  const slider = $(".slider");

  const textbox = $(".text-box");

  const logo = $(".logo-link");
  const nav = $(".nav");

  const tl = new TimelineMax();

  // =================== Layout animation ==================

  // tl.fromTo(
  //   hero,
  //   1,
  //   { height: "0%" },
  //   { height: "80%", ease: Power2.easeInOut }
  // ).fromTo(
  //   slider,
  //   1,
  //   { width: "0%" },
  //   { width: "100%", ease: Power2.easeInOut }
  // );

  // ================== Element fade In =========================

  // const tl2 = new TimelineMax();

  // tl2
  //   .fromTo(
  //     textbox,
  //     1.5,
  //     { opacity: 0 },
  //     { opacity: 1, ease: Power2.easeInOut }
  //   )
  //   .fromTo(
  //     nav,
  //     1.5,
  //     { opacity: 0, x: 30 },
  //     { opacity: 1, x: 0, ease: Power2.easeInOut },
  //     "-=1.5"
  //   );
});
