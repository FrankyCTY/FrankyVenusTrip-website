$(document).ready(() => {
  // =================== Local Storage =======================

  // =================== DARK MODE ===================
  const theme = localStorage.getItem("theme");

  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  const theme_checkbox = document.querySelector("#theme-toggle");

  const theme_button = document.querySelector(".theme-toggle");

  theme_checkbox.addEventListener("change", function () {
    if (this.checked) {
      trans();
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      trans();
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  });

  let trans = () => {
    document.documentElement.classList.add("transition");

    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 1000);
  };
});
