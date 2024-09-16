import Socials from "../Socials"

function HomeScreen() {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center gap-4 p-8 text-center"
      id="inicio"
    >
      <h2 className="text-7xl font-light">Sarah Oliveira</h2>
      <h3 className="text-4xl font-extralight font-mono">
        Desenvolvedora front-end
      </h3>
      <p className="text-xl max-w-md">
        Apaixonada por <strong>UI, UX e design</strong>. Meu objetivo é me
        tornar uma desenvolvedora front-end experiente e criar interfaces
        inovadoras e intuitivas
      </p>

      <Socials />

      <img
        className="absolute -z-10 top-1/4"
        src="home-screen-triangle.svg"
        alt="Inverted triangle"
      />

      <img
        className="hidden md:inline top-10 left-10 absolute"
        src="cam-line-tl.png"
      />
      <img
        className="hidden md:inline top-10 right-10 absolute"
        src="cam-line-tr.png"
      />
      <img
        className="hidden md:inline bottom-20 right-10 absolute"
        src="cam-line-br.png"
      />
      <img
        className="hidden md:inline bottom-20 left-10 absolute"
        src="cam-line-bl.png"
      />
    </section>
  )
}

export default HomeScreen
