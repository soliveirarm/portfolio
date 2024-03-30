import styled from "styled-components";
import NavLink from "./NavLink";
import Flex from "./Style/Flex";
import { useEffect, useState } from "react";

const Nav = styled.nav`
  padding: 2rem;

  .link {
    cursor: pointer;
    transition: ease-in-out 0.3s;
    position: relative;
    text-decoration: none;
    color: var(--light);
    font-weight: 500;

    &:hover {
      color: var(--accent);
    }
  }

  .link::after {
    transition: ease-in-out 0.3s;
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    width: 0;
    height: 2px;
    background-color: var(--accent);
  }

  .link:hover::after {
    width: 100%;
  }

  .selected {
    color: var(--accent);

    &::after {
      transition: ease-in-out 0.3s;
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      width: 100%;
      height: 2px;
      background-color: var(--accent);
    }
  }
`;

export default function NavLinks() {
  const [selected, setSelected] = useState("home");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY >= 0 && scrollY < 700) {
        setSelected("home");
      } else if (scrollY >= 700 && scrollY < 1700) {
        setSelected("about");
      } else {
        setSelected("projects");
      }
    });
  }, []);

  return (
    <Nav>
      <Flex as="ul">
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
      </Flex>
    </Nav>
  );
}
