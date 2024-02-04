import myAge from "../js/age";
import ResumeLink from "./ResumeLink";
import Tech from "./Technologies";
import Flex from "./Flex";
import styled from "styled-components";

const profilePicUrl = "https://avatars.githubusercontent.com/u/76123583?v=4";

const StyledFlex = styled(Flex)`
  margin-top: 2rem;
  color: var(--light);
  border-radius: 30px 10px;

  .about__pic {
    align-self: center;
    width: 200px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  .about__content {
    text-align: center;
    color: var(--mute);
    margin-bottom: 10px;
    font-weight: 400;
    line-height: 1.5;
    max-width: 768px;
  }

  p > span {
    color: var(--light);
    font-weight: bold;
  }
`;

export default function About() {
  return (
    <StyledFlex
      as="section"
      $centerY={true}
      $column={true}
      className="section"
      id="sobre"
    >
      <h2 className="section__title title">Sobre Mim</h2>
      <img src={profilePicUrl} className="about__pic" />

      <p className="about__content">
        Olá, meu nome é Sarah Oliveira, tenho {myAge} anos, sou de{" "}
        <span>Lins, São Paulo</span> e estou estudando para ser desenvolvedora
        front-end. Me formei na Fatec Lins em Sistemas para Internet, gosto
        muito da parte visual e gostaria de trabalhar com
        <span> front-end</span> e<span> design UX/UI</span>.
      </p>
      <h3>Para mais informações sobre a minha formação profissional:</h3>
      <ResumeLink />

      <Tech />
    </StyledFlex>
  );
}
