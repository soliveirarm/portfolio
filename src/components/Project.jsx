import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Flex from "./Style/Flex";
import styled from "styled-components";

const StyledFlex = styled(Flex)`
  cursor: pointer;
  border-radius: 10px;
  padding: 1rem;
  justify-content: space-between;

  &:hover {
    background-color: var(--accent-translucid);

    .link-icon {
      color: var(--accent);
    }
  }

  img {
    width: 100%;
    object-fit: contain;
    border-radius: 10px;
  }

  h2 {
    font-size: 1.2rem;
  }

  .desc {
    color: var(--mute);
  }

  .link-icon {
    align-self: end;
  }
`;

const Techs = styled(Flex)`
  span {
    font-weight: 500;
    color: var(--accent-light);
    background-color: rgba(205, 167, 255, 0.1);
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
  }
`;

export default function Project({ cover, title, desc, pageLink, techs }) {
  return (
    <StyledFlex
      as="section"
      $column={true}
      $gap="10px"
      $centerY={true}
      className="transition"
      onClick={() => window.open(pageLink, "_blank")}
    >
      <img src={cover} />

      <h2>{title}</h2>

      <Flex $column={true} $gap="10px" className="content">
        <p className="desc">{desc}</p>
        <Techs $gap="0.5rem">
          {techs.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </Techs>
      </Flex>

      <span className="link-icon transition">
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
      </span>
    </StyledFlex>
  );
}
