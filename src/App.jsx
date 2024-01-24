import NavLinks from "./components/section/NavLinks";
import Socials from "./components/section/Socials";
import BasicInfo from "./components/section/BasicInfo";
import About from "./components/section/About";
import Header from "./components/Header";
import Projects from "./components/section/Projects/Projects";

export default function App() {
  return (
    <>
      <Header>
        <BasicInfo />
        <NavLinks />
        <Socials />
      </Header>
      <main className="flex flex-column flex-center">
        <About />

        <Projects />

        <div
          id="contato"
          className="section contact flex flex-column flex-center"
        >
          <h1 className="section__title">Contato</h1>
          <p>Gostaria de entrar em contato comigo?</p>
          <p>
            Meu email:{" "}
            <a href="mailto:sarah.mdeo@outlook.com">sarah.mdeo@outlook.com</a>
          </p>
        </div>
      </main>
    </>
  );
}
