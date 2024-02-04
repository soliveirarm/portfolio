import styled from "styled-components";

const Flex = styled.div`
  @include flex();
  display: flex;
  gap: ${({ $gap }) => $gap || "20px"};
  ${({ $column }) => $column && "flex-direction: column;"}
  ${({ $centerY }) => $centerY && "align-items: center;"}
  ${({ $centerX }) => $centerX && "justify-content: center;"}
`;

export default Flex;
