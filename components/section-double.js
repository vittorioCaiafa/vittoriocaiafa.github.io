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
      .map((src) => `<img src="${src}" class="movement" style="width: 60px; margin: 5px;" />`)
      .join("");
    const imagesRightHtml = imagesRight
      .map((src) => `<img src="${src}" class="movement" style="width: 60px; margin: 5px;" />`)
      .join("");

    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="css/movement.css" />
    <link rel="stylesheet" href="css/body.css" />
      <style>
        :host {
          display: flex;
          gap: 20px;
          margin: 15%;
        }
  
        .box {
          flex: 1;
          display: flex;
          align-items: center;
          flex-direction: column; /* apilado vertical */
          justify-content: center; /* centra verticalmente */
          gap: 10%;
          border-radius: 60px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        .box-left {
            background: linear-gradient(135deg,rgb(31, 31, 31, 0.1) 0%,rgb(0, 207, 255, 0.2) 200%);
        }

        .box-right {
             background: linear-gradient(135deg,rgb(31, 31, 31, 0.3) 0%,rgb(0, 207, 255, 0.4) 150%);
        }
  
        .text-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          padding: 40px;
        }
  
        .text-content h2 {
          font-size: 32px;
          margin: 0;
          margin-bottom: 30px;
          color: rgb(255, 255, 255);
        }
  
        .images-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 10px;
          justify-content: center; /* centra las imágenes horizontalmente */
        }
  
        .images-container img {
          width: 10%px;
          height: auto;
          object-fit: contain;
          padding: 5px;
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
