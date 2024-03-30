import styled from "styled-components";

const Li = styled.li`
  user-select: none;
  font-weight: 500;
  color: var(--accent-light);
  background-color: rgba(205, 167, 255, 0.1);
  padding: 0.5rem;
  border-radius: 5px;
`;

export default function TechIcon({ name }) {
  return (
    <Li as="li" $gap="5px">
      {name}
    </Li>
  );
}
