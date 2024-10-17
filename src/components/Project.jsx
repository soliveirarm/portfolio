import { LuExternalLink } from "react-icons/lu"

import Techs from "./Techs"

export default function Project({ cover, title, desc, pageLink, techs }) {
  return (
    <section
      className="group flex flex-col justify-between items-center gap-2.5 rounded-10 p-4 cursor-pointer hover:bg-accent/15 transition hover:ring-2 ring-accent/80"
      onClick={() => window.open(pageLink, "_blank")}
    >
      <img className="w-full object-contain rounded-10" src={cover} />

      <h2 className="text-xl font-title text-center">{title}</h2>

      <div className="flex flex-col gap-2.5">
        <p className="text-zinc-300">{desc}</p>
        <Techs array={techs} />
      </div>

      <span className="group-hover:text-accent self-end transition">
        <LuExternalLink size="18" />
      </span>
    </section>
  )
}
