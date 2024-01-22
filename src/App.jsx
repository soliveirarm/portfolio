import NavLinks from "./components/NavLinks";
import Socials from "./components/Socials";
import BasicInfo from "./components/BasicInfo";
import About from "./components/About";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header>
        <BasicInfo />
        <NavLinks />
        <Socials />
      </Header>
      <main className="flex-column center">
        <About />

        <div id="contato" className="contact flex-column center">
          <h1 className="section-title">Contato</h1>
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
