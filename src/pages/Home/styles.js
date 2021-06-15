import styled from "styled-components";

export const DivBackground = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivContainer = styled.div`
  max-width: 310px;
  display: flex;
  flex-direction: column;
  height: 85%;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 80%;
    height: 80%;
  }
`;

export const DivDescription = styled.div`
  justify-content: space-around;
  background-color: var(--colorTwo);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50%;
  text-align: center;
  padding: 20px;

  h3 {
    font-size: 30px;
    color: black;
    font-family: "Roboto", sans-serif;
  }

  h4 {
    font-size: 20px;
    padding: 0 20px;
    color: black;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    height: 100%;
    justify-content: space-evenly;
  }
`;

export const DivButtons = styled.div`
  background-color: var(--colorThree);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50%;
  text-align: center;
  justify-content: space-evenly;

  div {
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
  }

  p {
    font-size: 20px;
    padding: 0 20px;
    color: white;
    text-decoration: none;
    margin-bottom: 25px;
  }

  a {
    color: inherit;
  }

  button {
    background-color: yellow;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px 20px;
  }

  @media (min-width: 768px) {
    height: 100%;
    width: 75%;
  }
`;
