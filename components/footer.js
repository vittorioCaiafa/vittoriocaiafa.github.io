class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background-color: #f5f5f5;
          color: #666;
          text-align: center;
          padding: 1.5rem 0;
          font-family: "Outfit", sans-serif;
          font-size: 0.9rem;
          width: 100%;
        }
      </style>
      <footer>
        <p>&copy; 2025 Vittorio Caiafa. All rights reserved.</p>
      </footer>
    `;
  }
}

customElements.define("footer-comp", Footer);
