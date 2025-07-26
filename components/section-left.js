class SectionLeft extends HTMLElement {
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
      <style>
        .section-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-top: 50px;
          margin-bottom: 50px;
          margin-left: 200px;
          margin-right: 200px;
          padding: 30px;
          border-radius: 60px;
          background: linear-gradient(135deg,rgb(10, 20, 41, 0.6) 0%,rgb(0, 5, 16, 0.8) 100%);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .section-left-content {
          display: flex;
          align-items: center;
          flex: 1;
          gap: 20px;
        }

        .section-icon {
          width: 200px;
          height: 200px;
          flex-shrink: 0;
        }

        .text-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
        }

        .text-content h2 {
          font-size: 50px;
          margin: 0;
        }

        .text-content p {
          font-size: 25px;
          margin-top: 8px;
          white-space: pre-line;
        }
      </style>

      <div class="section-container">
        <div class="section-left-content">
          <img class="section-icon" src="${icon}" />
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
