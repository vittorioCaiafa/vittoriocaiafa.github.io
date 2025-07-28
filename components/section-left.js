class SectionLeft extends HTMLElement {
  static get observedAttributes() {
    return ["icon", "title", "description", "image", "icon-size"];
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
    const iconSize = this.getAttribute("icon-size") || "20%";

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="css/movement.css" />
      <link rel="stylesheet" href="css/body.css" />
      <link rel="stylesheet" href="css/section-left.css" />
      <style>
        .section-icon {
          width: ${iconSize};
          flex-shrink: 0;
        }
      </style>
      <div class="section-container">
        <div class="section-left-content">
          <img class="section-icon movement" src="${icon}" />
          <div class="text-content">
            <h2>${title}</h2>
            <p>${description}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("section-left", SectionLeft);
