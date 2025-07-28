class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="css/navbar.css" />
        <link rel="stylesheet" href="css/button.css" />
        <nav>
      <ul>
        <li>
          <a href="#about">Sobre Mí</a>
        </li>
        <li>
          <a href="#skills">Habilidades</a>
        </li>
        <li>
          <a href="#projects">Proyectos</a>
        </li>
        <li>
          <a href="#work-experience">Experiencia</a>
        </li>
        <li>
          <a href="#titles">Títulos</a>
        </li>
        <li>
          <a href="#education">Educación</a>
        </li>
        <li>
          <a href="#languages">Idiomas</a>
        </li>
        <li>
          <a href="#contact">
          <button style="font-size: 0.6rem; padding: 0.4rem;" class="gradient-border-button">Contacto →</button></a>
        </li> 
      </ul>
    </nav>`;
  }
}

customElements.define("navbar-comp", NavBar);
