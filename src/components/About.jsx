import profilePic from "../assets/profile-pic.png";

import Tech from "./Tech";
import myAge from "../js/age";

export default function About() {
  return (
    <div className="about flex-column center" id="sobre">
      <h1 className="section-title">Sobre Mim</h1>
      <img src={profilePic} className="profile-pic" />
      <p className="about__content">
        Olá, meu nome é Sarah Oliveira, tenho {myAge} anos e estou estudando
        para ser desenvolvedora front-end. Me formei na Fatec Lins em Sistemas
        para Internet, gosto muito da parte visual e gostaria de trabalhar tanto
        com
        <span className="accent"> front-end</span> como{" "}
        <span className="accent">design UX/UI</span>.
      </p>

      <div className="tech">
        <p className="tech__title">
          Algumas <span className="accent">tecnologias</span> com as quais eu
          tive contato:
        </p>
        <div className="flex center">
          <Tech name="HTML" />
          <Tech name="CSS" />
          <Tech name="JavaScript" />
          <Tech name="Sass" />
          <Tech name="Tailwind" />
          <Tech name="MySQL" />
          <Tech name="React" />
        </div>
      </div>
    </div>
  );
}
