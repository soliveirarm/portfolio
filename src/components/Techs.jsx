import styled from "styled-components";
import Flex from "./Style/Flex";

const Container = styled(Flex)`
  color: var(--accent-light);
  font-weight: 500;

  span {
    background-color: rgba(205, 167, 255, 0.1);
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
  }
`;

function Techs({ array }) {
  return (
    <Container $gap="0.5rem">
      {array.map((tech) => (
        <span key={tech}>{tech}</span>
      ))}
    </Container>
  );
}

export default Techs;
