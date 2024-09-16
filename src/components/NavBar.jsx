import NavLink from "./NavLink"
import { useEffect, useState } from "react"

function NavBar() {
  const [selected, setSelected] = useState("home")

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY >= 0 && scrollY < 700) {
        setSelected("home")
      } else if (scrollY >= 700 && scrollY < 1600) {
        setSelected("about")
      } else setSelected("projects")
    })
  }, [])

  const selectedHome = selected === "home"
  const selectedAbout = selected === "about"
  const selectedProjects = selected === "projects"

  const setHome = () => setSelected("home")
  const setAbout = () => setSelected("about")
  const setProjects = () => setSelected("projects")

  return (
    <nav className="navbar p-8 text-black">
      <ul className="flex gap-5">
        <NavLink href="#inicio" isSelected={selectedHome} onClick={setHome}>
          Início
        </NavLink>
        <NavLink href="#sobre" isSelected={selectedAbout} onClick={setAbout}>
          Sobre Mim
        </NavLink>
        <NavLink
          href="#projetos"
          isSelected={selectedProjects}
          onClick={setProjects}
        >
          Projetos
        </NavLink>
      </ul>
    </nav>
  )
}

export default NavBar
