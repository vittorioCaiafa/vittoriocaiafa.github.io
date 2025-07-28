class SectionDouble extends HTMLElement {
  static get observedAttributes() {
    return [
      "icon-left",
      "title-left",
      "description-left",
      "icon-right",
      "title-right",
      "description-right",
    ];
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
    const titleLeft = this.getAttribute("title-left") || "";
    const descriptionLeft = this.getAttribute("description-left") || "";

    const titleRight = this.getAttribute("title-right") || "";
    const descriptionRight = this.getAttribute("description-right") || "";

    const imagesLeft = descriptionLeft.replace(/\n/g, "").split(",").map(src => src.trim());
    const imagesRight = descriptionRight.replace(/\n/g, "").split(",").map(src => src.trim());

    const imagesLeftHtml = imagesLeft.map(src => `<img src="${src}" class="movement" />`).join("");
    const imagesRightHtml = imagesRight.map(src => `<img src="${src}" class="movement" />`).join("");

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="css/section-double.css" />
      <div class="box box-left">
        <div class="text-content">
          <h2>${titleLeft}</h2>
          <div class="images-container">
            ${imagesLeftHtml}
          </div>
        </div>
      </div>

      <div class="box box-right">
        <div class="text-content">
          <h2>${titleRight}</h2>
          <div class="images-container">
            ${imagesRightHtml}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("section-double", SectionDouble);
