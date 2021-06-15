import styled from "styled-components";

export const DivContainerLarge = styled.div`
  background-color: var(--colorFour);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    max-width: 450px;
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  h1 {
    font-size: 40px;
    color: var(--colorOne);
  }

  form {
    width: 80%;
    height: 60%;
    background-color: var(--colorOne);
    justify-content: space-around;
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 40px;
    padding: 0 20px;
    align-items: center;
    padding: 20px;
  }

  form input {
    width: 80%;
    padding: 10px 20px;
    background-color: var(--colorTwo);
    border: none;
    border-radius: 15px;
    color: var(--colorOne);
    font-size: 20px;
  }

  p {
    font-size: 20px;
    color: var(--colorOne);
  }

  a {
    font-weight: bold;
    color: inherit;
    color: var(--colorFive);
  }

  span {
    color: var(--colorFive);
    font-size: 20px;
  }

  @media (min-width: 768px) {
    && {
      button {
        width: 225px;
        height: 80px;
        margin: 0;
      }
    }
  }
`;
