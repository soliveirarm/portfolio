import styled from "styled-components";
import Socials from "../Socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Section = styled.section`
  position: relative;
  height: 95vh;
  display: grid;
  place-content: center;
  place-items: center;

  h2 {
    font-size: 3rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 400;
  }

  p {
    color: #c7c7c7;
    font-size: 1rem;
    font-weight: 300;
    max-width: 320px;
  }

  h2,
  h3,
  p {
    text-align: center;
    padding: 3px;
  }
`;

export default function HomeScreen() {
  return (
    <Section className="section" id="inicio">
      <h2 className="accent">Sarah Oliveira</h2>
      <h3>Desenvolvedora front-end</h3>
      <p>
        Apaixonada por UI, UX e design. Meu objetivo é me tornar uma
        desenvolvedora front-end experiente criar interfaces inovadoras e
        intuitivas
      </p>

      <Socials />
    </Section>
  );
}
