$(document).ready(function () {
  //Import Materialize Elements and functions
  $(".carousel").carousel();
  $(".materialboxed").materialbox();
  $(".tooltipped").tooltip();
  $(".dropdown-trigger").dropdown();
  $(".sidenav").sidenav();

  autoplay();
  function autoplay() {
    $(".carousel").carousel("next");
    setTimeout(autoplay, 4000);
  }

  // Preloader
  window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader-page");
    preloader.classList.add("preloader-page--finish");
  });
});
