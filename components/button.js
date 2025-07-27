class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
          <button>
            ${name}
          </button>`;
  }
}

customElements.define("navbar-comp", NavBar);
