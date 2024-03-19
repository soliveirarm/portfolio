import styled from "styled-components";
import { Link } from "react-router-dom";

const ContainerLink = styled(Link)`
  max-width: 300px;
  position: relative;

  h3 {
    padding: 0.25rem;
    text-align: center;
    color: var(--accent-light);
    font-weight: 400;
  }

  h2 {
    width: 80%;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 0.5rem;
    background-color: #181825;
    color: var(--accent);
    border-radius: 0.5rem;
  }

  img {
    width: 300px;
    height: 200px;
    border-radius: 0.5rem;
    object-fit: cover;
  }
`;

function AcademicProject({ cover, id, title }) {
  return (
    <ContainerLink to={`/projetos/academicos/${id}`}>
      <h2>{title}</h2>
      <img src={cover} alt="" />
      <h3>{id}º semestre</h3>
    </ContainerLink>
  );
}

export default AcademicProject;
