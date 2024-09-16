import { myAge } from "../../js/age"
import ResumeLink from "../ResumeLink"
import Tech from "../TechIcon"

const profilePicUrl = "https://avatars.githubusercontent.com/u/76123583?v=4"

function About() {
  return (
    <section
      className="w-full bg-zinc-50 text-slate-800 p-8 flex flex-col items-center gap-4"
      id="sobre"
    >
      <h2 className="text-3xl font-light my-4 font-mono">Sobre Mim</h2>

      <img src={profilePicUrl} className="w-48 rounded-lg shadow-md" />
      <p className="text-center max-w-screen-md">
        Olá, meu nome é Sarah Oliveira, tenho {myAge} anos, sou de{" "}
        <strong>Lins, São Paulo</strong> e estou estudando para ser
        desenvolvedora front-end. Me formei na Fatec Lins em Sistemas para
        Internet, gosto muito da parte visual e gostaria de trabalhar com
        <strong> front-end</strong> e<strong> design UX/UI</strong>.
      </p>

      <h3 className="text-xl my-4 text-center font-mono">Tecnologias:</h3>
      <ul className="flex flex-wrap justify-center gap-2">
        <Tech name="HTML" />
        <Tech name="CSS" />
        <Tech name="Sass" />
        <Tech name="JavaScript" />
        <Tech name="Tailwind" />
        <Tech name="Figma" />
        <Tech name="React" />
        <Tech name="styled-components" />
      </ul>

      <h3 className="text-xl font-medium">
        Para mais informações sobre a minha formação profissional:
      </h3>
      <ResumeLink />
    </section>
  )
}

export default About
