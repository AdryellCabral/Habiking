import styled from "styled-components";

export const DivBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivContainer = styled.div`
  max-width: 450px;
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

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
    margin: 20px;
    margin-bottom: 0;

    @media (min-width: 768px) {
      margin-bottom: 20px;
    }
  }

  p {
    font-size: 1.2rem;
    color: var(--colorTwo);
    margin: 20px;
  }

  a {
    font-weight: bold;
    color: var(--colorTwo);
    text-transform: uppercase;
  }

  span {
    color: var(--colorTwo);
    font-size: 20px;
  }

  @media (min-width: 768px) {
    max-width: none;

    form {
      width: 100%;
      border: none;
      border-radius: 0;
    }

    input {
      max-width: 450px;
    }

    && {
      button {
        width: 225px;
        height: 80px;
        margin: 0;
      }
    }
  }
`;
