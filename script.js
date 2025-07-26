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

document.addEventListener("DOMContentLoaded", () => {
  const about = window.constants.aboutme;
  const skills = window.constants.skills;

  const sectionAbout = document.getElementById("section-aboutme");
  sectionAbout.setAttribute("icon", about.icon);
  sectionAbout.setAttribute("title", about.title);
  sectionAbout.setAttribute("description", about.description);
  sectionAbout.setAttribute("image", about.image);

  const sectionSkills = document.getElementById("section-skills");
  sectionSkills.setAttribute("icon", skills.image);
  sectionSkills.setAttribute("title", skills.title);
  sectionSkills.setAttribute("description", skills.description);
  sectionSkills.setAttribute("image", skills.image);
});
