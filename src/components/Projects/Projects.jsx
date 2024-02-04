import Project from "./Project";
import Flex from "../Flex";
import PROJECTS from "./projects.json";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

export default function Projects() {
  return (
    <Flex
      as="section"
      $centerY={true}
      $column={true}
      id="projetos"
      className="section"
    >
      <h2 className="section__title projects">Projetos</h2>

      <Grid>
        {PROJECTS.personal.map((el) => (
          <Project key={el.title} {...el} />
        ))}
      </Grid>
    </Flex>
  );
}
