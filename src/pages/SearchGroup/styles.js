import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const Breaker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchButton = styled(Button)`
  && {
    width: 40vw;
    height: 5vh;
    margin: 4vw;
    margin-left: 0;
    padding: 2vw;
    background-color: var(--colorOne);
    border: 2px double var(--borderColorTwo);
    border-left: 0;
    border-radius: 0 10px 10px 0;
    color: var(--textColor);

    &:hover {
      background-color: var(--hoverColor);
      transition: 300ms;
    }
  }

  @media (min-width: 768px) {
    && {
      width: 20vw;
      min-height: 3vh;
      margin: 2vw;
      margin-left: 0;
      padding: 1.4vw;
    }
  }
`;

export const TextField = styled.textarea`
  width: 80vw;
  height: 4.3vh;

  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;

  margin: 10px 0 10px 10px;

  border: 2px solid var(--borderColor);
  border-right: 0;
  border-radius: 10px 0 0 10px;
  background-color: var(--colorTwo);

  @media (min-width: 768px) {
    height: 5.4vh;
    width: 20vw;
  }
`;

export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  align-self: center;
  width: 90vw;
  height: 76vh;

  overflow: auto;

  border: 2px solid var(--borderColorOne);
  box-shadow: 0 0 10px var(--shadowColor);
  background-color: var(--colorOne);
  border-radius: 10px;

  h1 {
    border: 2px solid var(--borderColorOne);
    border-radius: 0 0 20px 20px;
    padding: 10px;
    margin: 10px;
    min-width: 70vw;
    color: var(--colorTwo);
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 80vw;
    height: 46vh;

    overflow-y: hidden;

    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--colorTwo);
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--hoverColor);
      transition: 500ms;
    }

    h1 {
      border: 2px solid var(--borderColorOne);
      border-radius: 0 0 20px 20px;
      padding: 10px;
      margin: 10px;
      min-width: 20vw;
      color: var(--colorTwo);
      text-transform: uppercase;
    }
  }
`;
