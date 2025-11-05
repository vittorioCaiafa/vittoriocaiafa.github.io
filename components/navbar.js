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
          <a href="#" class="nav-brand">Vittorio Caiafa</a>
          <button class="nav-toggle" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul class="nav-menu">
            <li class="nav-item">
              <a href="#about" class="nav-link" data-section="about" data-i18n="nav.aboutMe"></a>
            </li>
            <li class="nav-item">
              <a href="#skills" class="nav-link" data-section="skills" data-i18n="nav.skills"></a>
            </li>
            <li class="nav-item">
              <a href="#experience" class="nav-link" data-section="experience" data-i18n="nav.experience"></a>
            </li>
            <li class="nav-item">
              <a href="#projects" class="nav-link" data-section="projects" data-i18n="nav.projects"></a>
            </li>
            <li class="nav-item">
              <a href="#contact" class="nav-link" data-section="contact" data-i18n="nav.contact"></a>
            </li>
            <li class="nav-item">
              <button onclick="toggleLanguage()" class="language-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span data-i18n="nav.language"></span>
              </button>
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

    // Observador de intersección para secciones activas
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = this.querySelectorAll('.nav-link[data-section]');

    // Configuración diferente para secciones muy grandes
    const createObserver = (threshold, rootMargin) => {
      return new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionId = entry.target.id;
              
              // Remover clase active de todos los links
              navLinks.forEach((link) => {
                link.classList.remove('active');
              });

              // Agregar clase active al link correspondiente
              const activeLink = this.querySelector(`[data-section="${sectionId}"]`);
              if (activeLink) {
                activeLink.classList.add('active');
              }
            }
          });
        },
        {
          threshold: threshold,
          rootMargin: rootMargin
        }
      );
    };

    sections.forEach((section) => {
      // Configuración especial para la sección de experience (200vh)
      if (section.id === 'experience') {
        const experienceObserver = createObserver(0.05, '-80px 0px -70% 0px');
        experienceObserver.observe(section);
      } else {
        const defaultObserver = createObserver(0.15, '-80px 0px -60% 0px');
        defaultObserver.observe(section);
      }
    });
  }
}

customElements.define("navbar-comp", NavbarComp);
