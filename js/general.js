$(document).ready(() => {
  // =================== Local Storage =======================
  // =================== DARK MODE ===================
  // =========== Page Transition =============
});

function lsColor() {
  const theme = localStorage.getItem("theme");

  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  const theme_checkbox = document.querySelectorAll("#theme-toggle");
  theme_checkbox.forEach((theme_checkbox) => {
    theme_checkbox.addEventListener("change", function () {
      console.log("checkBox clicked!");
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
      }, 500);
    };
  });
}

lsColor();
