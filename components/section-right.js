class SectionRight extends HTMLElement {
  static get observedAttributes() {
    return ["icon", "title", "description", "image", "statnumber1", "statlabel1", "statnumber2", "statlabel2", "statnumber3", "statlabel3"];
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
    const statnumber1 = this.getAttribute("statnumber1") || "";
    const statlabel1 = this.getAttribute("statlabel1") || "";
    const statnumber2 = this.getAttribute("statnumber2") || "";
    const statlabel2 = this.getAttribute("statlabel2") || "";
    const statnumber3 = this.getAttribute("statnumber3") || "";
    const statlabel3 = this.getAttribute("statlabel3") || "";

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
            <div class="stat-number">${statnumber1}</div>
            <div class="stat-label">${statlabel1}</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">${statnumber2}</div>
            <div class="stat-label">${statlabel2}</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">${statnumber3}</div>
            <div class="stat-label">${statlabel3}</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("section-right", SectionRight);
