import NavLink from "./NavLink"
import { useEffect, useState } from "react"

export default function Header() {
  const [onTop, setOnTop] = useState(true)
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

      if (scrollY == 0) setOnTop(true)
      else setOnTop(false)
    })
  }, [])

  return (
    <header
      className={`w-full flex justify-center items-center z-50 fixed transition ${
        onTop ? "p-8 top-2  bg-transparent" : "top-0 p-4 bg-black"
      }`}
    >
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
