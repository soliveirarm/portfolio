import TechIcon from "../components/TechIcon";
import Flex from "../components/Style/Flex";
import styled from "styled-components";
import tailwind from "/icons/tailwindcss.svg";
import mySql from "/icons/mysql.svg";
import figma from "/icons/figma.svg";
import styledComponents from "/icons/styled-components.svg";
import {
  faCss3,
  faHtml5,
  faJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

const Section = styled(Flex)`
  .icons {
    display: grid;
    justify-items: center;
    align-items: center;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
  }

  img {
    width: 40px;
  }

  @media screen and (max-width: 640px) {
    .icons {
      width: 100%;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 480px) {
    .icons {
      grid-template-columns: 1fr;
    }
  }
`;

export default function Technologies() {
  return (
    <Section
      as="section"
      $centerY={true}
      $column={true}
      $gap="5px"
      className="section fade-in"
      id="tecnologias"
    >
      <h2 className="section__title">Tecnologias</h2>

      <ul className="icons">
        <TechIcon name="HTML" icon={faHtml5} />
        <TechIcon name="CSS" icon={faCss3} />
        <TechIcon name="JavaScript" icon={faJs} />
        <TechIcon name="Sass" icon={faSass} />
        <TechIcon name="Tailwind" type="svg" icon={tailwind} />
        <TechIcon name="MySQL" type="svg" icon={mySql} />
        <TechIcon name="React" icon={faReact} />
        <TechIcon name="styled-components" type="svg" icon={styledComponents} />
        <TechIcon name="Figma" type="svg" icon={figma} />
      </ul>
    </Section>
  );
}
