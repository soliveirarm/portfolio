import PROJECTS from "../../data/projects.json"
import Project from "../Project"

function Projects() {
  return (
    <section
      id="projetos"
      className="flex flex-col items-center gap-8 light-bg py-8"
    >
      <h2 className="text-3xl font-light font-mono">Projetos</h2>

      <div className="flex justify-center flex-wrap gap-8 max-w-screen-2xl">
        {PROJECTS.personal.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
