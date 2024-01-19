import profilePic from "../assets/profile-pic.png";

export default function About() {
  return (
    <div className="about" id="sobre">
      <img src={profilePic} className="profile-pic" />

      <div className="about__info">
        <h1 className="section-title">Sobre Mim</h1>
        <p className="about__content">
          Olá, meu nome é Sarah Oliveira, tenho 19 anos e estou estudando para
          ser desenvolvedora front-end. Me formei na Fatec Lins em Sistemas para
          Internet, gosto muito da parte visual e gostaria de trabalhar tanto
          com front-end como design UX/UI. <br />
          Na próxima seção tem alguns projetos, espero que goste!
        </p>

        <p className="technologies-title">
          Algumas tecnologias com as quais eu tive contato:
        </p>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>SASS</li>
          <li>Git</li>
          <li>React</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    </div>
  );
}
