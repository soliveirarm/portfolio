import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Link = styled.a`
  text-decoration: none;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 1.1rem;
  border: 2px solid var(--accent);
  padding: 1rem;
  border-radius: 10px;

  &:hover {
    background-color: var(--accent);
    color: var(--dark);
    transform: scale(1.1);
  }
`;

export default function ResumeLink() {
  return (
    <Link href="curriculo.pdf" target="_blank" className="bold accent">
      <FontAwesomeIcon icon={faFilePdf} size="lg" />
      <span>Meu Currículo</span>
    </Link>
  );
}
