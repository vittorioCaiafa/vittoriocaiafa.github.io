class ButtonComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="css/button.css" />
      <div aria-label="User Login Button" tabindex="0" role="button" class="bttn">
        <div class="bttn-inner">
          <p><slot></slot></p>
        </div>
      </div>`;
  }
}

customElements.define("button-component", ButtonComponent);
