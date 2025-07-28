class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="css/footer.css" />
      <footer>
        <div class="footer-content">
          <div class="copyright">
            Copyright &copy; 2025 Vittorio Caiafa
          </div>
          <div class="social-icons">
            <a href="https://www.linkedin.com" target="_blank" title="LinkedIn"><img
            src="assets/icons/socials/linkedin.png" /></a>
            <a href="https://github.com" target="_blank" title="GitHub"><img
            src="assets/icons/socials/github.png" /></a>
            <a href="https://www.instagram.com" target="_blank" title="Instagram"><img
            src="assets/icons/socials/instagram.png" /></a>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define("footer-comp", Footer);
