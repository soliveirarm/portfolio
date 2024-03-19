import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Flex from "./Style/Flex";
import styled from "styled-components";

const Li = styled(Flex)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: var(--accent-translucid);
  width: 190px;
  height: 180px;
  user-select: none;
  font-weight: 300;
  color: var(--accent-light);

  @media screen and (max-width: 768px) {
    padding: 1.2rem 0.5rem;
  }
`;

export default function TechIcon({ name, icon, type }) {
  return (
    <Li as="li" $gap="5px" $centerY={true} $centerX={true} $column={true}>
      {type == "svg" ? (
        <img src={icon} />
      ) : (
        <FontAwesomeIcon icon={icon} size="2xl" />
      )}
      <span>{name}</span>
    </Li>
  );
}
