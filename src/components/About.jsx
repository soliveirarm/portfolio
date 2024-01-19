import profilePic from "../assets/profile-pic.png";
import CSS from "./icons/CSS";
import Git from "./icons/Git";
import HTML from "./icons/HTML";
import JavaScript from "./icons/JavaScript";
import React from "./icons/React";
import Sass from "./icons/Sass";

export default function About() {
  return (
    <div className="about flex-column center" id="sobre">
      <h1 className="section-title">Sobre Mim</h1>
      <img src={profilePic} className="profile-pic" />
      <p className="about__content">
        Olá, meu nome é Sarah Oliveira, tenho 19 anos e estou estudando para ser
        desenvolvedora front-end. Me formei na Fatec Lins em Sistemas para
        Internet, gosto muito da parte visual e gostaria de trabalhar tanto com
        <span className="accent"> front-end</span> como{" "}
        <span className="accent">design UX/UI</span>.
      </p>

      <p className="technologies-title">
        Algumas <span className="accent">tecnologias</span> com as quais eu tive
        contato:
      </p>
      <div className="flex justify-content-center">
        <HTML />
        <CSS />
        <JavaScript />
        <Sass />
        <Git />
        <React />
      </div>
    </div>
  );
}
