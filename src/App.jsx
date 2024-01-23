import NavLinks from "./components/Sections/NavLinks";
import Socials from "./components/Sections/Socials";
import BasicInfo from "./components/Sections/BasicInfo";
import About from "./components/Sections/About";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header>
        <BasicInfo />
        <NavLinks />
        <Socials />
      </Header>
      <main className="flex f-column f-center">
        <About />

        <div id="contato" className="section contact flex f-column f-center">
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
