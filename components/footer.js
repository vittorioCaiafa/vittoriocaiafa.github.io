class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <footer>
        <p>&copy; 2025 Vittorio Caiafa. Todos los derechos reservados.</p>
      </footer>`;
  }
}

customElements.define("Footer", Footer);
