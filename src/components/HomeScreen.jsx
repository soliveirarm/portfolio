import styled from "styled-components";
import Socials from "./Socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Section = styled.section`
  position: relative;
  height: 90vh;
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

  .scroll {
    position: absolute;
    bottom: 1rem;
  }
`;

export default function HomeScreen() {
  return (
    <Section className="section">
      <h2 className="accent title">Sarah Oliveira</h2>
      <h3>Desenvolvedora front-end</h3>
      <p>
        Design, UI e UX são as coisas que mais me atraem, por isso me identifico
        com front-end
      </p>

      <Socials />

      <a className="scroll" href="#sobre">
        <FontAwesomeIcon icon={faChevronDown} size="xl" />
      </a>
    </Section>
  );
}
