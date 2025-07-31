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
          <a href="#" onclick="scrollToCenter('about')">Sobre Mí</a>
        </li>
        <li>
          <a href="#" onclick="scrollToCenter('skills')">Habilidades</a>
        </li>
        <li>
          <a href="#" onclick="scrollToCenter('projects')">Proyectos</a>
        </li>
        <li>
          <a href="#" onclick="scrollToCenter('work-experience')">Experiencia</a>
        </li>
        <li>
          <a href="#" onclick="scrollToCenter('titles')">Títulos</a>
        </li>
        <li>
          <a href="#" onclick="scrollToCenter('education')">Educación</a>
        </li>
        <li>
          <a href="#" onclick="scrollToCenter('languages')">Idiomas</a>
        </li>
        <li>
          <a href="#" onclick="scrollToCenter('contact')">
          <button style="font-size: 0.6rem; padding: 0.4rem;" class="gradient-border-button">Contacto →</button></a>
        </li> 
      </ul>
    </nav>`;
  }
}

customElements.define("navbar-comp", NavBar);
