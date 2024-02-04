import styled from "styled-components";

const Section = styled.section`
  h2 {
    font-size: 2rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  p {
    color: #c7c7c7;
    font-size: 1rem;
    font-weight: 300;
    max-width: 300px;
  }

  h2,
  h3,
  p {
    padding: 3px;
  }
`;

export default function BasicInfo() {
  return (
    <Section className="section">
      <h2 className="accent">Sarah Oliveira</h2>
      <h3>Desenvolvedora front-end</h3>
      <p>
        Design, UI e UX são as coisas que mais me atraem, por isso me identifico
        com front-end
      </p>
    </Section>
  );
}
