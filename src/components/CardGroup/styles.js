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
  color: var(--colorSix);
`;

export const GroupContainer = styled.div`
  span {
    border: 2px solid var(--borderColor);
    padding: 10px;
    margin: 20px;
  }

  h2 {
    min-width: 70vw;
    margin: 30px;
    font-size: 2rem;
  }

  p {
    margin: 0;
    margin: 30px;
    font-size: 1rem;
  }
`;
