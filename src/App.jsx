import BasicInfo from "./components/BasicInfo";
import NavLinks from "./components/NavLinks";
import About from "./components/About";
import Projects from "./components/Projects/Projects";
import styled from "styled-components";
import logo from "/logo.svg";
import Flex from "./components/Flex";

const Header = styled(Flex)`
  justify-content: space-between;
  position: sticky;
  top: 0.5rem;
  background-color: var(--dark);
  border-radius: 10px;
  height: 70px;
  padding: 0 0.5rem 0 0.5rem;
  border: 2px solid var(--accent);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  z-index: 100;

  @media screen and (max-width: 640px) {
    & {
      justify-content: center;
    }

    img {
      display: none;
    }
  }
`;

const Logo = styled.img`
  width: 60px;
`;

const Main = styled.main`
  margin: 0 auto;
  max-width: 1024px;
`;

export default function App() {
  return (
    <>
      <Header as="header" $centerY={true}>
        <Logo src={logo} alt="Logo do site escrito 'SO' na cor roxa" />
        <NavLinks />
      </Header>
      <BasicInfo />

      <Main>
        <About />
        <Projects />
      </Main>
    </>
  );
}
