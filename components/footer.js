class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: rgba(10, 15, 30, 0.96);
          color: #334155;
          text-align: center;
          padding: 1.5rem 0;
          font-family: "Outfit", sans-serif;
          font-size: 0.82rem;
          width: 100%;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }
      </style>
      <footer>
        <p>&copy; 2025 Vittorio Caiafa. All rights reserved.</p>
      </footer>
    `;
  }
}

customElements.define("footer-comp", Footer);
