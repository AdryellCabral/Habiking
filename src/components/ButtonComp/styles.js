import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const MyButton = styled(Button)`
  width: 40vw !important;
  margin: 10vw !important;
  padding: 2vw !important;
  background-color: var(--colorOne) !important;
  border: 2px double var(--borderColor) !important;
  border-radius: 10px !important;
  box-shadow: 0 0 10px var(--shadowColor) !important;
  color: var(--textColor) !important;

  &:hover {
    background-color: var(--colorThree) !important;
    transition: 300ms !important;
  }
`;
