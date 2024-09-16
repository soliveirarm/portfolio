import HomeScreen from "./components/main-sections/HomeScreen"
import About from "./components/main-sections/About"
import Projects from "./components/main-sections/Projects"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <HomeScreen />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
