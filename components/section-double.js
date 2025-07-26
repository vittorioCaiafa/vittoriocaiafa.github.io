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
    const iconLeft = this.getAttribute("icon-left") || "";
    const titleLeft = this.getAttribute("title-left") || "";
    const descriptionLeft = this.getAttribute("description-left") || "";

    const iconRight = this.getAttribute("icon-right") || "";
    const titleRight = this.getAttribute("title-right") || "";
    const descriptionRight = this.getAttribute("description-right") || "";

    // Split comma-separated image URLs
    const imagesLeft = descriptionLeft
      .replace(/\n/g, "") // eliminar saltos de línea
      .split(",") // separar por coma
      .map((src) => src.trim()); // limpiar espacios

    const imagesRight = descriptionRight
      .replace(/\n/g, "") // eliminar saltos de línea
      .split(",") // separar por coma
      .map((src) => src.trim()); // limpiar espacios

    // Convert to <img> elements
    const imagesLeftHtml = imagesLeft
      .map((src) => `<img src="${src}" style="width: 60px; margin: 5px;" />`)
      .join("");
    const imagesRightHtml = imagesRight
      .map((src) => `<img src="${src}" style="width: 0px; margin: 5px;" />`)
      .join("");

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          gap: 20px;
          margin: 200px;
          margin-top: 50px;
        }
  
        .box {
          flex: 1;
          display: flex;
          align-items: center;
          flex-direction: column; /* apilado vertical */
          justify-content: center; /* centra verticalmente */
          gap: 20px;
          padding: 15px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        .box-left {
            background: linear-gradient(135deg, #000000 0%, #0fff7f 300%);
        }

        .box-right {
             background: linear-gradient(40deg, #1f1f1f 0%, #00cfff 300%);
        }

        .box img:first-child {
          flex-shrink: 0;
          border-radius: 12px;
          object-fit: contain;
        }
  
        .text-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
        }
  
        .text-content h2 {
          font-size: 32px;
          margin: 0;
        }
  
        .images-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 10px;
        }
  
        .images-container img {
          width: 100px;
          height: auto;
          object-fit: contain;
        }
      </style>
  
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
