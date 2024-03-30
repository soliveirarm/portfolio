import { useParams } from "react-router-dom";
import PROJECTS from "../data/projects.json";
import Flex from "./Style/Flex";
import Techs from "./Techs";
import styled from "styled-components";

const Section = styled(Flex)`
  margin-bottom: 100px;
  img {
    width: 99vw;
    height: 500px;
    object-fit: cover;
    background-position: center;
    border-radius: 0.5rem;
  }

  h3 {
    color: var(--accent-light);
  }
`;

function AcademicProjectDetails() {
  const params = useParams();

  const filteredElArray = PROJECTS.academic.filter(
    ({ id }) => id == params.semester
  );

  return (
    <>
      {filteredElArray.map(({ id, cover, title, desc, objective, techs }) => (
        <Section as="section" $column={true} $centerY={true} key={id}>
          <img src={cover} alt={`Imagem da página do projeto ${title}`} />
          <h2 className="section__title accent">{title}</h2>
          <h3>Sobre</h3>
          <p>{desc}</p>

          <h3>Objetivo</h3>
          <p>{objective}</p>

          <h3>Tecnologias</h3>
          <Techs array={techs} />
        </Section>
      ))}
    </>
  );
}

export default AcademicProjectDetails;
