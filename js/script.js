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
