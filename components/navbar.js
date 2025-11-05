class NavLink extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const to = this.getAttribute("to") || "#";
    const text = this.innerHTML.trim();
    const current = window.location.pathname.split("/").pop();
    const isActive = current === to || current === `${to}.html`;

    const baseClass = "nav-link";
    const activeClass = "active";

    this.shadowRoot.innerHTML = `
      <style>
        a {
          text-decoration: none;
          color: inherit;
          transition: color 0.2s ease;
        }
        a.${activeClass} {
          color: var(--primary-color, #007bff);
          font-weight: 600;
        }
        a:hover {
          color: var(--primary-hover, #0056b3);
        }
      </style>
      <a href="${to}" class="${baseClass} ${isActive ? activeClass : ""}">
        ${text}
      </a>
    `;
  }
}

customElements.define("nav-link", NavLink);

// Componente principal del Navbar
class NavbarComp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
        <div class="nav-container">
          <a href="index.html" class="nav-brand">Vittorio Caiafa</a>
          <button class="nav-toggle" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul class="nav-menu">
            <li class="nav-item">
              <nav-link to="index.html">Inicio</nav-link>
            </li>
            <li class="nav-item">
              <nav-link to="about.html">Sobre Mí</nav-link>
            </li>
            <li class="nav-item">
              <nav-link to="projects.html">Proyectos</nav-link>
            </li>
            <li class="nav-item">
              <nav-link to="contact.html">Contacto</nav-link>
            </li>
          </ul>
        </div>
      </nav>
    `;

    // Funcionalidad del menú móvil
    const toggle = this.querySelector('.nav-toggle');
    const menu = this.querySelector('.nav-menu');

    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
      });

      // Cerrar menú al hacer click en un enlace
      const links = this.querySelectorAll('.nav-item');
      links.forEach(link => {
        link.addEventListener('click', () => {
          toggle.classList.remove('active');
          menu.classList.remove('active');
        });
      });
    }
  }
}

customElements.define("navbar-comp", NavbarComp);
