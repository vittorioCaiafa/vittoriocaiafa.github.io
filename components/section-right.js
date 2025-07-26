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
        <style>
          .section-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin: 20px;
            padding: 20px;
            border: 2px solid #ccc;
            border-radius: 16px;
            background: linear-gradient(135deg, #f0f0f0, #d9d9d9);
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
          }
  
          .section-right-content {
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            flex: 1;
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
            text-align: right;
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
          <div class="section-right-content">
            <div class="text-content">
              <h2>${title}</h2>
              <p>${description}</p>
            </div>
            <img class="section-icon" src="${icon}" />
          </div>
        </div>
      `;
    }
  }
  
  customElements.define("section-right", SectionRight);
  