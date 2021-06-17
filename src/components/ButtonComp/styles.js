import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const MyButton = styled(Button)`
  && {
    width: 40vw;
    margin: 4vw;
    padding: 2vw;
    background-color: var(--colorOne);
    border: 2px double var(--colorTwo);
    border-radius: 10px;
    box-shadow: 0 0 10px var(--colorOne);
    color: var(--colorTwo);

    span {
      color: var(--colorTwo);
    }

    &:hover {
      border: 2px double var(--colorOne);
      background-color: var(--colorTwo);
      color: var(--colorOne);
      transition: 300ms;

      span {
        color: var(--colorOne);
      }
    }

    @media (min-width: 768px) {
      width: 20vw;
      margin: 2vw;
      padding: 1vw;
    }
  }
`;
