import NavLinks from "./components/NavLinks/NavLinks";
import Socials from "./components/Socials/Socials";
import BasicInfo from "./components/BasicInfo/BasicInfo";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <>
      <header>
        <BasicInfo />
        <NavLinks />
        <Socials />
      </header>
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
