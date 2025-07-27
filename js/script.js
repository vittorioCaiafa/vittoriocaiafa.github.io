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

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add("visible");
          el.classList.remove("hidden");
        } else {
          el.classList.remove("visible");
          el.classList.add("hidden");
        }
      });
    },
    { threshold: 0.1 } // Se activa cuando el 10% del elemento es visible
  );

  document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
    el.classList.add("hidden"); // forzar estado oculto inicial
    observer.observe(el);
  });
});
