import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Flex from "../Flex";

const Section = styled.section`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "img title"
    "img content";
  gap: 10px;

  img {
    grid-area: img;
    background-size: contain;
    border-radius: 10px;
    max-width: 200px;
    width: 100%;
  }

  h2 {
    font-size: 1.3rem;
    font-weight: 500;
    grid-area: title;

    a {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default function Project({ cover, title, desc, pageLink, techs }) {
  return (
    <Section className="project">
      <img src={cover} />

      <h2 className="accent">
        <a href={pageLink} target="_blank">
          <span>{title}</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
        </a>
      </h2>

      <Flex $column={true} $gap="10px" className="content">
        <p>{desc}</p>
        <p>
          Desenvolvido com: <span className="accent">{techs}</span>
        </p>
      </Flex>
    </Section>
  );
}
