class SectionRight extends HTMLElement {
  static get observedAttributes() {
    return ["icon", "title", "description", "image"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) this.render();
  }

  render() {
    const icon = this.getAttribute("icon") || "";
    const title = this.getAttribute("title") || "";
    const description = this.getAttribute("description") || "";

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="css/movement.css" />
      <link rel="stylesheet" href="css/body.css" />
      <link rel="stylesheet" href="css/section-right.css" />

      <div class="section-container">
        <div class="section-right-content">
          <div class="text-content">
            <h2>${title}</h2>
            <p>${description}</p>
          </div>
          <img class="section-icon movement" src="${icon}" />
        </div>

        <div class="stats-row">
          <div class="stat-item">
            <div class="stat-number">+1</div>
            <div class="stat-label">Años de<br>experiencia</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">+3</div>
            <div class="stat-label">Proyectos<br>realizados</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">+30</div>
            <div class="stat-label">Sesiones<br>coordinadas</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("section-right", SectionRight);
