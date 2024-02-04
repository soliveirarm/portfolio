import TechLabel from "./TechLabel";
import Flex from "./Flex";
import styled from "styled-components";

const Section = styled(Flex)`
  .icons {
    display: grid;
    justify-items: center;
    align-items: center;
    gap: 10px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 640px) {
    .icons {
      width: 100%;
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
      className="section"
      id="tecnologias"
    >
      <h2 className="section__title">Principais Tecnologias</h2>

      <ul className="icons">
        <TechLabel name="HTML" />
        <TechLabel name="CSS" />
        <TechLabel name="JavaScript" />
        <TechLabel name="Sass" />
        <TechLabel name="Tailwind" />
        <TechLabel name="MySQL" />
        <TechLabel name="React" />
        <TechLabel name="styled-components" />
      </ul>
    </Section>
  );
}
