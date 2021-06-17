import styled from "styled-components";

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vh;

  && > h1:nth-child(1) {
    margin-top: -5vh;
    margin-left: -5vh;
    align-self: flex-start;
    border-radius: 0 0 10px 0;
  }

  h1 {
    width: 60vw;
    text-align: center;
    border-bottom: 2px solid var(--colorTwo);
    border-radius: 10px;
    font-size: 1.4rem;
    margin: 10px;
    padding: 4px;
    color: var(--colorTwo);
  }

  @media (min-width: 768px) {
    h1 {
      width: 20vw;
    }
  }
`;

export const HabitList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  max-height: 96vw;
  border: 2px solid var(--colorThree);
  background-color: var(--colorOne);
  box-shadow: 0 0 10px var(--colorOne);
  overflow: auto;

  h1:nth-child(2) {
    margin-top: 16vh;
    border: none;
  }

  @media (min-width: 768px) {
    width: 60vw;
    max-height: 50vh;
    min-height: 56vh;

    h1:nth-child(2) {
      margin: 16vh;
      border: none;
    }
  }
`;
