import styled from "styled-components";
import Link from "./Link";
import Flex from "./Style/Flex";

const Nav = styled.nav`
  padding: 2rem;

  .link {
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
    left: 0;
    right: 0;
    width: 0;
    height: 2px;
    background-color: var(--accent);
  }

  .link:hover::after {
    width: 100%;
  }
`;

export default function NavLinks() {
  return (
    <Nav>
      <Flex as="ul">
        <Link href="#sobre" className="link">
          Sobre Mim
        </Link>
        <Link href="#tecnologias" className="link">
          Tecnologias
        </Link>
        <Link href="#projetos" className="link">
          Projetos
        </Link>
      </Flex>
    </Nav>
  );
}
