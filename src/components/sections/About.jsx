import { myAge } from "../../js/age"

import ResumeLink from "../ResumeLink"
import TechIcon from "../TechIcon"

const profilePicUrl = "https://avatars.githubusercontent.com/u/76123583?v=4"

export default function About() {
  return (
    <section className="flex flex-col gap-5 items-center p-8" id="sobre">
      <h2 className="tracking-wide text-3xl font-title italic">Sobre Mim</h2>

      <img src={profilePicUrl} className="w-52 rounded-10" />
      <p className="text-center text-zinc-200 max-w-screen-md">
        Olá, meu nome é Sarah Oliveira, tenho {myAge} anos, sou de{" "}
        <span className="text-accent-light font-bold">Lins, São Paulo</span> e
        estou estudando para ser desenvolvedora front-end. Me formei na Fatec
        Lins em Sistemas para Internet, gosto muito da parte visual e gostaria
        de trabalhar com
        <span className="text-accent-light font-bold"> front-end</span> e
        <span className="text-accent-light font-bold"> design UX/UI</span>.
      </p>

      <h3 className="tracking-wide text-xl">Tecnologias:</h3>
      <ul className="flex flex-wrap justify-center gap-2">
        <TechIcon name="HTML" />
        <TechIcon name="CSS" />
        <TechIcon name="Sass" />
        <TechIcon name="JavaScript" />
        <TechIcon name="Tailwind" />
        <TechIcon name="Figma" />
        <TechIcon name="React" />
        <TechIcon name="styled-components" />
      </ul>

      <h3 className="text-lg tracking-wide">
        Para mais informações sobre a minha formação profissional:
      </h3>
      <ResumeLink />
    </section>
  )
}
