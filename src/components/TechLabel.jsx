import Flex from "./Flex";
import styled from "styled-components";

const Li = styled(Flex)`
  width: 100%;
  border-radius: 10px;
  background-color: var(--accent-translucid);
  padding: 10px 12px;
  user-select: none;
  font-weight: 300;
  color: var(--accent-light);
`;

export default function TechLabel({ name }) {
  return (
    <Li as="li" $gap="5px" $centerX={true}>
      <span>{name}</span>
    </Li>
  );
}
