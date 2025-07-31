// Function to handle the typing effect
document.addEventListener("DOMContentLoaded", () => {
  // Typing effect
  const words = [
    "Vittorio Caiafa",
    "Ingeniero en Sistemas",
    "Desarrollador FullStack",
    "Apasionado por la tecnología",
  ];

  const typingText = document.querySelector(".typing-text");
  const cursor = document.querySelector(".cursor");

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeSpeed = 100;
  const deleteSpeed = 50;
  const waitTime = 2000;

  function type() {
    const currentWord = words[wordIndex];
    const visibleText = currentWord.substring(0, charIndex);
    typingText.textContent = visibleText;

    // Mueve el cursor al final del texto
    cursor.style.left = `${typingText.offsetWidth}px`;

    if (!isDeleting) {
      // Typing forward
      typingText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex <= currentWord.length) {
        setTimeout(type, typeSpeed);
      } else {
        // Pause before deleting
        setTimeout(() => {
          isDeleting = true;
          type();
        }, waitTime);
      }
    } else {
      // Deleting backward
      typingText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex > 0) {
        setTimeout(type, deleteSpeed);
      } else {
        // Move to next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, typeSpeed);
      }
    }
  }

  // Start typing effect immediately (empty at first)
  typingText.textContent = "";
  setTimeout(type, 500); // Small delay before starting
});

// Function to handle the mail sending
document.addEventListener("DOMContentLoaded", () => {
  function sendMail(e) {
    e.preventDefault();
    const message = document.getElementById("message").value.trim();
    if (!message) {
      alert("Por favor escribe un mensaje.");
      return false;
    }
    const email = "vittorio.caiafa@gmail.com";
    const subject = "Mensaje desde Portafolio";
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
    return false;
  }
});

// Function to scroll to the center of a section
function scrollToCenter(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const rect = section.getBoundingClientRect();
  const offset =
    rect.top + window.pageYOffset - window.innerHeight / 2 + rect.height / 2;

  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
}
