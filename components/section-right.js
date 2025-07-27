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
        <style>
          .section-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 15%;
            padding: 5%;
            border: none;
            border-radius: 60px;
            background: linear-gradient(135deg, rgb(48, 29, 75, 0.3), rgb(60, 187, 219, 0.2));
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
          }

          .section-right-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            gap: 20px;
            text-align: right;
          }

          .section-icon {
            width: 180px;
            height: 180px;
          }

          .text-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: left;
          }

          .text-content h2 {
            margin: 0;
          }

          .text-content p {
            margin-top: 8px;
            white-space: pre-line;
          }

          .stats-row {
            display: flex;
            gap: 60px;
            margin-top: 40px;
          }

          .stat-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 1rem;
          }

          .stat-number {
            font-size: 2rem;
            font-weight: bold;
            color: #fff;
          }

          .stat-label {
            margin-top: 5px;
            text-align: center;
            color: #ddd;
          }
        </style>

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
