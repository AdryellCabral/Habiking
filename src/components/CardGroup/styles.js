import styled from "styled-components";

export const Infos = styled.div`
  border: 2px solid var(--colorTwo);
  margin: 20px;
  box-shadow: 0 0 4px var(--colorOne);
  background-color: var(--colorThree);
  border-radius: 6px;

  @media (min-width: 768px) {
    width: 30vw;
  }
`;

export const GroupContainer = styled.div`
  h1 {
    text-align: center;
    border-bottom: 2px solid var(--colorTwo);
    border-radius: 10px;
    padding: 5px;
    margin: 10px;
    min-width: 70vw;
    color: var(--colorTwo);

    @media (min-width: 768px) {
      min-width: 20vw;
    }
  }

  p {
    margin: 0;
    margin: 10px;
    font-size: 1.2rem;
    color: var(--colorTwo);
  }
`;
