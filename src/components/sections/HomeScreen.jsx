import Socials from "../Socials"

export default function HomeScreen() {
  return (
    <section className="home-screen" id="inicio">
      <h2 className="text-accent text-5xl text-center p-1 font-title ">
        Sarah Oliveira
      </h2>
      <h3 className="text-2xl text-center p-1">Desenvolvedora front-end</h3>
      <p className="max-w-96 text-lg text-zinc-300 text-center p-1">
        Apaixonada por UI, UX e design. Meu objetivo é me tornar uma
        desenvolvedora front-end experiente criar interfaces inovadoras e
        intuitivas
      </p>

      <Socials />
    </section>
  )
}
