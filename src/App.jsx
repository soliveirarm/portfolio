import HomeScreen from "./components/sections/HomeScreen"
import NavLinks from "./components/Header"
import About from "./components/sections/About"
import Projects from "./components/sections/Projects"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <NavLinks />
      <HomeScreen />
      <main className="max-w-screen-lg mx-auto">
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
