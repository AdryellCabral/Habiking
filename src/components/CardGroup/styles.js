import styled from "styled-components";

export const Infos = styled.div`
  border: 2px solid var(--borderColorOne);
  margin: 20px;
  box-shadow: 0 0 4px var(--borderColorOne);
  border-radius: 6px;
`;

export const GroupContainer = styled.div`
  h1 {
    border: 2px solid var(--borderColorOne);
    padding: 10px;
    margin: 10px;
    min-width: 70vw;
    color: var(--colorTwo);
  }

  p {
    margin: 0;
    margin: 10px;
    font-size: 1.2rem;
    color: var(--textColor);
  }
`;
