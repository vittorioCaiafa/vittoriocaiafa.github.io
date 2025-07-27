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
      <style>
        .section-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-left: 15%;
          margin-right: 15%;
          margin-bottom: 1%;
          padding: 30px;
          border-radius: 60px;
          background: linear-gradient(135deg,rgb(10, 29, 41, 0.6) 0%,rgb(0, 12, 16, 0.3) 100%);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .section-left-content {
          display: flex;
          align-items: center;
          flex: 1;
          gap: 20px;
        }

        .section-icon {
          width: ${iconSize};
          flex-shrink: 0;
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
