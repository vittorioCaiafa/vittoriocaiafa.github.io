class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="css/navbar.css" />
      <link rel="stylesheet" href="css/button.css" />
      <script src="components/button.js"></script>
  
      <nav>
        <div class="navbar">
          <a href="index.html" class="nav-link">
            <div class="nav-left">
              <img src="assets/images/logo.png" class="logo" />
              <span class="brand-name">Portafolio</span>
            </div>
          </a>
          
          <div class="nav-center">
            <ul class="nav-links">
              <li><a href="#" onclick="location.href='about.html'">Sobre Mí</a></li>
              <li><a href="#" onclick="location.href='work-experience.html'">Experiencia</a></li>
              <li><a href="#" onclick="location.href='certificates.html'">Certificados</a></li>
              <li><a href="#" onclick="location.href='education.html'">Formación</a></li>
            </ul>
          </div>
  
          <div class="nav-right">
            <a href="#" onclick="location.href='contact.html'">
              <button-component>Contacto</button-component>
            </a>
          </div>
        </div>
      </nav>
    `;
  }

  setupEventListeners() {
    const hamburger = this.shadowRoot.getElementById("hamburger");
    const navLinks = this.shadowRoot.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
}

customElements.define("navbar-comp", NavBar);
