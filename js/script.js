document.addEventListener("DOMContentLoaded", () => {
  // Seteo de secciones
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

  // Reveal on scroll
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
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
  });

  // Typing effect
  const words = [
    "Vittorio Caiafa",
    "Ingeniero en sistemas",
    "Desarrollador",
    "Apasionado por la tecnología",
    "Tu próximo fichaje",
  ];

  const typingText = document.querySelector(".typing-text");
  const cursor = document.querySelector(".cursor");

  if (!typingText) {
    console.error("No se encontró .typing-text en el DOM");
    return;
  }

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeSpeed = 100;
  const deleteSpeed = 50;
  const waitTime = 1500;

  function type() {
    const currentWord = words[wordIndex];
    typingText.textContent = currentWord.substring(0, charIndex);

    if (!isDeleting) {
      if (charIndex < currentWord.length) {
        charIndex++;
        setTimeout(type, typeSpeed);
      } else {
        setTimeout(() => {
          isDeleting = true;
          setTimeout(type, deleteSpeed);
        }, waitTime);
      }
    } else {
      if (charIndex > 0) {
        charIndex--;
        setTimeout(type, deleteSpeed);
      } else {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, typeSpeed);
      }
    }
  }

  type(); // Iniciar el efecto
});
