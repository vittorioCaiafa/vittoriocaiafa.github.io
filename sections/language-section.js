class LanguageSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="css/body.css" />
    <script src="js/script.js"></script>
      <section id="languages">
        <h1 style="font-size: 50px; text-align: center">Idiomas</h1>
        <div class="side-by-side-section">
          <section-left
            icon="assets/resources/english-flag.png"
            description="Inglés
        Avanzado (Cambridge First Certificate - B2)"
            icon-size="10%"
          ></section-left>
          <section-left
            icon="assets/resources/brazil-flag.png"
            description="Portugués
        Intermedio (ULBRA Examen Intermediario - B1)"
            icon-size="10%"
          ></section-left>
        </div>
      </section>`;
  }
}

customElements.define("language-section", LanguageSection);
