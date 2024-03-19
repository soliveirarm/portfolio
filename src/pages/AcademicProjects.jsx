import styled from "styled-components";
import AcademicProject from "../components/AcademicProject";
import PROJECTS from "../data/projects.json";
import Flex from "../components/Style/Flex";

const ACADEMIC = PROJECTS.academic;

const Grid = styled.div`
  display: grid;
  place-items: center;
  place-content: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function AcademicProjects() {
  return (
    <Flex
      as="section"
      $centerY={true}
      $centerX={true}
      $column={true}
      id="projetos"
      className="section fade-in"
    >
      <h2 className="section__title">Projetos Acadêmicos</h2>
      <Grid>
        {ACADEMIC.map((el) => (
          <AcademicProject key={el.id} {...el} />
        ))}
      </Grid>
    </Flex>
  );
}

export default AcademicProjects;
