import Project from "./Project";
import PROJECTS from "./projects.json";
import "./Projects.scss";


export default function Projects() {
  return (
    <section id="projetos" className="section projects">
      <h1 className="section__title">Projetos</h1>
      {PROJECTS.map((el) => (
        <Project key={el.title} {...el} />
      ))}
    </section>
  );
}
