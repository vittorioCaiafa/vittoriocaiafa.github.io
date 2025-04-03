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
