import Flex from "./Flex";
import styled from "styled-components";

const Li = styled(Flex)`
  width: 100%;
  border-radius: 10px;
  background-color: rgba(205, 167, 255, 0.2);
  padding: 10px 12px;
  user-select: none;
  font-weight: 300;
  color: #eadaff;
`;

export default function TechLabel({ name }) {
  return (
    <Li as="li" $gap="5px" $centerX={true}>
      <span>{name}</span>
    </Li>
  );
}
