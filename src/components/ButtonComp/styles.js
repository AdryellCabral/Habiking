import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const MyButton = styled(Button)`
  && {
    width: 40vw;
    margin: 4vw;
    padding: 2vw;
    background-color: var(--colorOne);
    border: 2px double var(--borderColorOne);
    border-radius: 10px;
    box-shadow: 0 0 10px var(--shadowColor);
    color: var(--textColor);

    &:hover {
      background-color: var(--hoverColor);
      transition: 300ms;
    }
  }

  @media (min-width: 768px) {
    && {
      width: 20vw;
      margin: 2vw;
      padding: 1vw;
    }
  }
`;
