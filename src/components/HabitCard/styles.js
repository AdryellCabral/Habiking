import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: var(--colorTwo);
  border: 2px solid var(--colorThree);
  margin: 10px;
  padding: 10px;

  h1 {
    font-size: 1.2rem;
    text-transform: capitalize;
  }

  h2,
  p {
    margin: 6px;
  }

  h2::before {
    content: "Categoria:";
    border-left: 2px solid var(--colorThree);
    border-bottom: 2px solid var(--colorThree);
    border-radius: 4px;
    margin-right: 5px;
    padding: 2px;
  }

  p:nth-child(3)::before {
    content: "Dificuldade:";
    border-left: 2px solid var(--colorThree);
    border-bottom: 2px solid var(--colorThree);
    border-radius: 4px;
    margin-right: 5px;
    padding: 2px;
  }

  p:nth-child(4)::before {
    content: "Frequência:";
    border-left: 2px solid var(--colorThree);
    border-bottom: 2px solid var(--colorThree);
    border-radius: 4px;
    margin-right: 5px;
    padding: 2px;
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: var(--colorTwo);
    border: 2px solid var(--colorThree);
    margin: 10px;
    padding: 10px;
    width: 30vw;
  }
`;

export const Breaker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  margin: 10px;
  width: 100%;

  button {
    height: 5vh;
  }

  h1 {
    margin: 0 !important;
  }

  input {
    margin-left: 10px;
  }
`;
