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
    border: 2px double var(--borderColor);
    border-left: 0;
    border-radius: 0 10px 10px 0;
    color: var(--textColor);

    &:hover {
      background-color: var(--colorThree);
      transition: 300ms;
    }
  }
`;

export const TextField = styled.textarea`
  width: 80vw;
  height: 4vh;

  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;

  margin: 10px 0 10px 10px;

  border: 2px solid var(--borderColor);
  border-right: 0;
  border-radius: 10px 0 0 10px;
  background-color: var(--colorTwo);
`;
