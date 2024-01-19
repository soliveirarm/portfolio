import NavBar from "./components/NavBar";
import Socials from "./components/Socials";
import ResumeBtn from "./components/ResumeBtn";
import Home from "./components/Home";
import About from "./components/About";

export default function App() {
  return (
    <>
      <header>
        <Socials />
        <div className="flex flex-align-center">
          <NavBar />
          <ResumeBtn />
        </div>
      </header>
      <main>
        <Home />
        <About />
      </main>
    </>
  );
}
