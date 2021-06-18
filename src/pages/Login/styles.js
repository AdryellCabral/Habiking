import styled from "styled-components";

export const DivBackground = styled.div`
  background-color: var(--colorFour);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivContainer = styled.div`
  max-width: 450px;
  max-height: 450px;
  width: 100%;
  height: 59%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid var(--colorThree);

  h1 {
    font-size: 40px;
    color: var(--colorTwo);
    background-color: var(--colorOne);
    width: 60%;
    padding: 1vh;

    border: 2px solid var(--colorThree);
    border-bottom: 0;
    border-radius: 10px 10px 0 0;
    font-family: "Staatliches", cursive;
    text-transform: uppercase;
    text-align: center;
    box-shadow: 0 2px 10px var(--colorOne);
  }

  form {
    width: 80vw;
    background-color: var(--colorOne);
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 40px 40px 0 0;
    padding: 0 20px;
    align-items: center;
    padding: 20px;
    border: 2px solid var(--colorThree);
    box-shadow: 0 2px 10px var(--colorOne);
  }

  input {
    width: 80%;
    padding: 10px 20px;
    border: none;
    border-radius: 15px;
    font-size: 20px;
    margin: 0;
    margin-bottom: 0;
  }

  p {
    font-size: 1.2rem;
    color: var(--colorTwo);
    margin-top: 4vh;
    margin-bottom: 2vh;
    height: 1.2rem;
    @media (min-width: 768px) {
      margin-top: 2vh;
      margin-bottom: 2vh;
    }
  }

  a {
    font-weight: bold;
    color: inherit;
    color: var(--colorFive);
    text-transform: uppercase;
  }

  span {
    color: var(--colorFive);
    font-size: 20px;
    height: 25px;
  }

  @media (min-width: 768px) {
    max-width: none;
    width: 100%;

    h1 {
      width: 30%;
    }

    form {
      width: 100%;
      border: none;
      border-radius: 0;
    }

    input {
      max-width: 450px;
    }
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
