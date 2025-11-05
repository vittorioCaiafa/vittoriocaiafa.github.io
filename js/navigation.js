class NavigationComp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
        <div class="nav-container">
          <a href="#" class="nav-brand">Vittorio Caiafa</a>
          <button id="menu-btn" class="nav-toggle" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul id="nav-links" class="nav-menu">
            <li class="nav-item">
              <a href="#about">Sobre Mí</a>
            </li>
            <li class="nav-item">
              <a href="#skills">Habilidades</a>
            </li>
            <li class="nav-item">
              <a href="#projects">Proyectos</a>
            </li>
            <li class="nav-item">
              <a href="#contact">Contacto</a>
            </li>
          </ul>
          <button id="lang-toggle" class="lang-btn">EN</button>
        </div>
      </nav>
    `;

    const menuBtn = this.querySelector("#menu-btn");
    const navLinks = this.querySelector("#nav-links");
    const langBtn = this.querySelector("#lang-toggle");

    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    langBtn.addEventListener("click", () => {
      langBtn.textContent = langBtn.textContent === "EN" ? "ES" : "EN";
    });
  }
}

customElements.define("navigation-comp", NavigationComp);
