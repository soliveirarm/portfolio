import PROJECTS from "../../data/projects.json"
import Project from "../Project"

export default function Projects() {
  const renderedProjects = PROJECTS.personal.map((project) => (
    <Project key={project.title} {...project} />
  ))

  return (
    <section id="projetos" className="flex flex-col items-center gap-5 p-8">
      <h2 className="tracking-wide text-3xl font-title italic">Projetos</h2>

      <div className="grid gap-2 lg:grid-cols-2 xl:grid-cols-3 mb-20">
        {renderedProjects}
      </div>
    </section>
  )
}
