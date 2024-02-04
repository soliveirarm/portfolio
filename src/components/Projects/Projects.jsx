import Project from "./Project";
import Flex from "../Flex";
import PROJECTS from "./projects.json";
import styled from "styled-components";

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

      {PROJECTS.personal.map((el) => (
        <Project key={el.title} {...el} />
      ))}
    </Flex>
  );
}
