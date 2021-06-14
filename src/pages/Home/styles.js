import styled from "styled-components";

export const DivContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(#485563 20%, #29323c 75%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    max-width: 310px;
    display: flex;
    flex-direction: column;
    height: 85%;
  }

  p {
    font-size: 20px;
    padding: 0 20px;
    color: white;
    text-decoration: none;
  }

  a {
    color: inherit;
  }

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

  button {
    background-color: yellow;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px 20px;
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
  padding: 20px;

  div {
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    height: 50%;
  }
`;

export const DivDescription = styled(DivButtons)`
  justify-content: space-around;
  background-color: var(--colorTwo);
`;
