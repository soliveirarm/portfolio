import PROJECTS from "../../data/projects.json";
import Project from "../Project";
import Flex from "../Style/Flex";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Grid = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 80px;

  @media screen and (max-width: 1024px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 768px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

export default function Projects() {
  return (
    <Flex
      as="section"
      $centerY={true}
      $column={true}
      id="projetos"
      className="section fade-in"
    >
      <h2 className="section__title">Projetos</h2>

      <Grid>
        {PROJECTS.personal.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </Grid>
    </Flex>
  );
}
