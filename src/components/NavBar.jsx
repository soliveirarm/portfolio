import styled from "styled-components";
import Flex from "./Style/Flex";
import { Link } from "react-router-dom";

const Nav = styled(Flex)`
  background-color: var(--dark);
  border: 2px solid var(--accent);
  border-radius: 10px;
  position: fixed;
  bottom: 0.5rem;
  left: 50%;
  transform: translate(-50%, 0);
  height: 70px;
  padding: 2rem;
  z-index: 100;

  .link {
    cursor: pointer;
    transition: ease-in-out 0.3s;
    position: relative;
    text-decoration: none;
    color: var(--light);

    &:hover {
      color: var(--accent);
    }
  }

  .link::after {
    transition: ease-in-out 0.3s;
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    right: 0;
    width: 0;
    height: 2px;
    background-color: var(--accent);
  }

  .link:hover::after {
    left: 0;
    width: 100%;
  }

  @media screen and (max-width: 640px) {
    position: static;
    transform: translate(0, 0);
    border: none;
    height: auto;
    background-color: transparent;

    ul {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

function NavBar() {
  return (
    <Nav $centerY={true} $centerX={true}>
      <Flex as="ul">
        <Link to="/" className="link">
          Início
        </Link>
        <Link to="/sobre" className="link">
          Sobre Mim
        </Link>
        <Link to="/tecnologias" className="link">
          Tecnologias
        </Link>
        <Link to="/projetos" className="link">
          Projetos
        </Link>
      </Flex>
    </Nav>
  );
}

export default NavBar;
