class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="css/navbar.css" />
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
      <a href="#languages">Lenguajes</a>
    </li>
    <li>
      <a href="#contact">Contacto</a>
    </li>
  </ul>
</nav>;`;
  }
}

customElements.define("navbar-comp", NavBar);
