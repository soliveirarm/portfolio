import NavLink from "./NavLink"
import { useEffect, useState } from "react"

export default function Header() {
  const [selected, setSelected] = useState("home")

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY >= 0 && scrollY < 700) {
        setSelected("home")
      } else if (scrollY >= 700 && scrollY < 1700) {
        setSelected("about")
      } else {
        setSelected("projects")
      }
    })
  }, [])

  return (
    <header className="flex justify-center items-center p-8 fixed top-2 w-full bg-transparent z-50">
      <nav>
        <ul className="flex gap-5">
          <NavLink
            href="#inicio"
            isSelected={selected === "home"}
            onClick={() => setSelected("home")}
          >
            Início
          </NavLink>
          <NavLink
            href="#sobre"
            isSelected={selected === "about"}
            onClick={() => setSelected("about")}
          >
            Sobre Mim
          </NavLink>
          <NavLink
            href="#projetos"
            isSelected={selected === "projects"}
            onClick={() => setSelected("projects")}
          >
            Projetos
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}
