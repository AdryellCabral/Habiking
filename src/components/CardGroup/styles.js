import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  align-self: center;
  width: 82vw;
  height: 62vh;
  padding: 50px;

  border: 2px solid var(--borderColor);
  box-shadow: 0 0 10px var(--shadowColor);
  background-color: var(--colorOne);
  color: var(--colorSix);

  border-bottom-left-radius: 40%;
  border-top-right-radius: 40%;
`;

export const GroupContainer = styled.div`
  h2 {
    min-width: 70vw;
    margin: 20px;
    padding: 20px;
    font-size: 2rem;
  }

  span {
    margin: 20px;
    padding: 10px;
    font-size: 1rem;
  }

  p {
    margin: 20px;
    padding: 10px;
    font-size: 1rem;
  }
`;
