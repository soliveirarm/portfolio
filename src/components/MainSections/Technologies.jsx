import TechIcon from "../TechIcon";
import Flex from "../Style/Flex";
import styled from "styled-components";
import tailwind from "/icons/tailwindcss.svg";
import mySql from "/icons/mysql.svg";
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
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
  }

  img {
    width: 40px;
  }

  @media screen and (max-width: 768px) {
    .icons {
      grid-template-columns: repeat(2, 1fr);
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
      className="section"
      id="tecnologias"
    >
      <h2 className="section__title title">Principais Tecnologias</h2>

      <ul className="icons">
        <TechIcon name="HTML" icon={faHtml5} />
        <TechIcon name="CSS" icon={faCss3} />
        <TechIcon name="JavaScript" icon={faJs} />
        <TechIcon name="Sass" icon={faSass} />
        <TechIcon name="Tailwind" type="svg" icon={tailwind} />
        <TechIcon name="MySQL" type="svg" icon={mySql} />
        <TechIcon name="React" icon={faReact} />
        <TechIcon name="styled-components" type="svg" icon={styledComponents} />
      </ul>
    </Section>
  );
}
