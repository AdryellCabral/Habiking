import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  align-self: center;
  width: 90vw;
  height: 65vh;
  padding: 50px;

  border: 2px solid var(--borderColor);
  box-shadow: 0 0 10px var(--shadowColor);
  background-color: var(--colorOne);
`;

export const GroupContainer = styled.div`
  h1 {
    border: 2px solid var(--borderColor);
    padding: 10px;
    margin: 10px;
    min-width: 70vw;
    color: var(--colorSix);
  }

  p {
    margin: 0;
    margin: 10px;
    font-size: 1.2rem;
    color: var(--textColor);
  }
`;
