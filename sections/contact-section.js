class ContactSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="css/body.css" />
        <link rel="stylesheet" href="css/contact.css" />
        <section id="contact" class="contact-section">
          <h2>Hablemos</h2>
          <p>¿Necesitas un desarrollador para tu proyecto?</p>
          <p>No dudes en escribirme. Dejame tu mensaje y lo charlamos.</p>
          <div class="message-container" id="message-container">
            <div>
              <textarea placeholder="Escribí tu mensaje..." id="message"></textarea>
              <p id="messageError" class="error-message"></p>
            </div>
            <button id="sendButton">Enviar</button> 
          </div>
          <p id="successMessage"
             style="display: none; margin-top: 2%; margin-bottom: 3%; color: #00ff40">
             Mensaje enviado exitosamente!
          </p>
        </section>
      `;

    const shadow = this.shadowRoot;
    const sendButton = shadow.getElementById("sendButton");

    sendButton.addEventListener("click", () => {
      const messageInput = shadow.getElementById("message");
      const messageContainer = shadow.getElementById("message-container");

      const message = messageInput.value.trim();

      const messageError = shadow.getElementById("messageError");
      const successMessage = shadow.getElementById("successMessage");

      messageError.textContent = "";
      messageInput.classList.remove("error");
      successMessage.style.display = "none";

      let hasError = false;

      if (!message) {
        messageError.textContent = "El mensaje no puede estar vacío.";
        messageInput.classList.add("error");
        hasError = true;
      }

      if (hasError) return;

      const subject = encodeURIComponent("💼 Nuevo mensaje desde el portfolio");
      const body = encodeURIComponent(`${message}`);
      const mailtoLink = `mailto:vittorio.caiafa@gmail.com?subject=${subject}&body=${body}`;

      const a = document.createElement("a");
      a.href = mailtoLink;
      a.target = "_blank";
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      messageContainer.style.display = "none";
      successMessage.style.display = "block";
      messageInput.value = "";
    });
  }
}

customElements.define("contact-section", ContactSection);
