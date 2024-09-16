import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import Techs from "./Techs"

function Project({ cover, title, desc, pageLink, techs }) {
  const openProject = () => window.open(pageLink, "_blank")

  return (
    <section
      className="group flex flex-col justify-between items-center gap-2.5 cursor-pointer rounded-lg p-4 bg-zinc-200/25 shadow-lg hover:bg-accent/10 transition"
      onClick={openProject}
    >
      <img className="w-96 object-contain rounded-lg" src={cover} />

      <h2 className="text-xl font-medium text-slate-900">{title}</h2>

      <div className="flex flex-col gap-2.5">
        <p className="max-w-96">{desc}</p>
        <Techs array={techs} />
      </div>

      <span className="self-end transition group-hover:text-accent">
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
      </span>
    </section>
  )
}

export default Project
