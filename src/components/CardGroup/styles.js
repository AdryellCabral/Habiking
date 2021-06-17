import styled from "styled-components";

export const Infos = styled.div`
  margin: 20px;
  border-bottom: 2px solid var(--colorTwo);
  box-shadow: 0 0 4px var(--colorOne);
  background-color: var(--colorThree);
  border-radius: 6px;

  @media (min-width: 768px) {
    width: 30vw;

    button {
      height: 30px;
    }
  }
`;

export const GroupContainer = styled.div`
  h1 {
    text-align: center;
    margin: 10px;
    min-width: 70vw;
    color: var(--colorTwo);

    @media (min-width: 768px) {
      min-width: 20vw;
    }
  }

  p {
    padding: 5px;
    font-size: 1.2rem;
    border-bottom: 2px solid var(--colorTwo);
    border-radius: 10px;
    width: 60vw;

    @media (min-width: 768px) {
      width: 14vw;
    }
  }
`;
