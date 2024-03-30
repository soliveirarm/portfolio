import myAge from "../../js/age";
import ResumeLink from "../ResumeLink";
import Flex from "../Style/Flex";
import styled from "styled-components";
import Tech from "../TechIcon";

const profilePicUrl = "https://avatars.githubusercontent.com/u/76123583?v=4";

const Container = styled(Flex)`
  color: var(--light);
  border-radius: 30px 10px;

  .about__pic {
    width: 200px;
    border-radius: 10px;
    box-shadow: 0 0 40px var(--accent-translucid);
  }

  .about__content {
    text-align: center;
    color: var(--mute);
    font-weight: 400;
    line-height: 1.5;
    max-width: 768px;
  }

  p > span {
    color: var(--accent-light);
    font-weight: bold;
  }

  h3 {
    margin-top: 1rem;
    text-align: center;
  }
`;

export default function About() {
  return (
    <Container
      as="section"
      $centerY={true}
      $column={true}
      className="section fade-in"
      id="sobre"
    >
      <h2 className="section__title">Sobre Mim</h2>

      <img src={profilePicUrl} className="about__pic" />
      <p className="about__content">
        Olá, meu nome é Sarah Oliveira, tenho {myAge} anos, sou de{" "}
        <span>Lins, São Paulo</span> e estou estudando para ser desenvolvedora
        front-end. Me formei na Fatec Lins em Sistemas para Internet, gosto
        muito da parte visual e gostaria de trabalhar com
        <span> front-end</span> e<span> design UX/UI</span>.
      </p>

      <h3 className="section__title">Tecnologias:</h3>
      <Flex as="ul" $gap="0.5rem" $wrap={true} $centerX={true}>
        <Tech name="HTML" />
        <Tech name="CSS" />
        <Tech name="Sass" />
        <Tech name="JavaScript" />
        <Tech name="Tailwind" />
        <Tech name="Figma" />
        <Tech name="React" />
        <Tech name="styled-components" />
      </Flex>

      <h3 className="section__title">
        Para mais informações sobre a minha formação profissional:
      </h3>
      <ResumeLink />
    </Container>
  );
}
