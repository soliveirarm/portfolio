import myAge from "../../js/age";
import Tech from "../Tech";

export default function About() {
  return (
    <section className="section about flex f-column f-center" id="sobre">
      <h1 className="section__title">Sobre Mim</h1>
      <img
        src="https://avatars.githubusercontent.com/u/76123583?v=4"
        className="profile-pic"
      />
      <p className="about__content">
        Olá, meu nome é Sarah Oliveira, tenho {myAge} anos e estou estudando
        para ser desenvolvedora front-end. Me formei na Fatec Lins em Sistemas
        para Internet, gosto muito da parte visual e gostaria de trabalhar com
        <span className="accent bold"> front-end</span> e
        <span className="accent bold"> design UX/UI</span>.
      </p>

      <Tech />
    </section>
  );
}
