import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.scss";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <section id="contato" className="section contact">
      <h1 className="section__title">Contato</h1>
      <p>
        Se interessou pelo meu trabalho e gostaria de entrar em contato comigo?
        Meu <span className="accent bold">E-mail</span> e{" "}
        <span className="accent bold">Whatsapp</span> estão disponíveis nos
        links abaixo, só clicar!
      </p>
      <div className="contact__links">
        <a href="mailto:sarah.mdeo@outlook.com">
          <FontAwesomeIcon icon={faEnvelope} className="contact__icon" />
          <span>sarah.mdeo@outlook.com</span>
        </a>
        <a href="https://wa.link/tqa75s" target="_blank">
          <FontAwesomeIcon
            icon={faWhatsapp}
            size="lg"
            className="contact__icon"
          />
          <span>+55 (14) 9 9882-9329</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
