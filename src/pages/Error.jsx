import styled from "styled-components";

const Section = styled.section`
  height: 95vh;
  width: 100%;
  display: grid;
  place-items: center;
  place-content: center;
  gap: 2rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  padding: 2rem;
  text-align: center;
  background-color: #f38ba8;
  color: var(--dark);
  width: 100%;
  border-radius: 0.5rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
`;

function Error() {
  return (
    <Section>
      <Title>Erro</Title>

      <Text>
        A página que você tentou acessar não existe! Verifique o endereço
        digitado
      </Text>
    </Section>
  );
}

export default Error;
