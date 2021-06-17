import styled from "styled-components";
import SelectField from "../../components/SelectField";

export const StyledSelectField = styled(SelectField)``;

export const Breaker = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerHab = styled.form`
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  width: 86vw;
  border: 2px solid var(--colorThree);
  background-color: var(--colorOne);

  .MuiFormControl-root {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  h1 {
    text-align: center;
    margin: 20px;
    font-size: 2rem;
    text-transform: uppercase;
    font-family: "Staatliches", cursive;
    color: var(--colorTwo);
    border-bottom: 2px solid var(--colorTwo);
    border-radius: 10px;
    width: 70%;
  }

  input {
    width: 190px;
    color: var(--colorTwo);
    border-radius: 15px;
    font-size: 20px;
    background-color: var(--colorOne);

    &::placeholder {
      color: grey;
    }
  }

  @media (min-width: 768px) {
    height: 60vh;
    width: 60vw;
    border: 2px solid var(--colorThree);
    background-color: var(--colorOne);

    h1 {
      text-align: center;
      margin: 20px;
      font-size: 2rem;
      text-transform: uppercase;
      font-family: "Staatliches", cursive;
      color: var(--colorTwo);
      border-bottom: 2px solid var(--colorTwo);
      border-radius: 10px;
      width: 70%;
    }

    input {
      width: 380px;
      color: var(--colorTwo);
      border-radius: 15px;
      font-size: 20px;
      background-color: var(--colorOne);

      &::placeholder {
        color: grey;
      }
    }
  }
`;
