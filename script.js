document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("slide-right")) {
            entry.target.classList.add("slide-right-active");
          } else if (entry.target.classList.contains("slide-left")) {
            entry.target.classList.add("slide-left-active");
          }
        }
      });
    },
    { threshold: 0.3 } // Detecta cuando el 30% del elemento está visible
  );

  sections.forEach((section) => observer.observe(section));
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.querySelector(".switch input");
  const body = document.body;

  // Comprobar si el usuario ya tiene una preferencia guardada
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    toggleSwitch.checked = true;
  }

  toggleSwitch.addEventListener("change", function () {
    if (this.checked) {
      body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled"); // Guarda la preferencia
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  });
});
