import BasicInfo from "./components/BasicInfo";
import NavLinks from "./components/NavLinks";
import Socials from "./components/Socials";
import About from "./components/About";
import Projects from "./components/Projects/Projects";

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
      </main>
    </>
  );
}
