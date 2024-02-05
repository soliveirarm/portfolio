import HomeScreen from "./components/HomeScreen";
import NavLinks from "./components/NavLinks";
import About from "./components/MainSections/About";
import Projects from "./components/MainSections/Projects";
import Flex from "./components/Style/Flex";
import Socials from "./components/Socials";
import logo from "/logo.svg";
import styled from "styled-components";
import Technologies from "./components/MainSections/Technologies";

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

const Footer = styled(Flex)`
  justify-content: space-between;
  margin-top: 2rem;
  border-top: 2px solid var(--accent);
  padding: 3rem 2rem 2rem;
  text-align: center;

  p {
    color: var(--accent-light);
    font-weight: bold;
  }
`;

export default function App() {
  return (
    <>
      <Header as="header" $centerY={true}>
        <Logo src={logo} alt="Logo do site escrito 'SO' na cor roxa" />
        <NavLinks />
      </Header>

      <HomeScreen />

      <Main>
        <About />
        <Technologies />
        <Projects />
      </Main>

      <Footer as="footer" $column={true} $centerY={true} $gap="0.1rem">
        <p>Feito com React, Sass e styled-components</p>
        <Socials />
      </Footer>
    </>
  );
}
