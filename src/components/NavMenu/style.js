import styled from "styled-components";
import MenuItem from "@material-ui/core/MenuItem";

export const Breaker = styled.div`
  display: flex;
  border-bottom: 2px solid var(--borderColorTwo);
  box-shadow: 0 0 10px var(--colorOne);

  svg {
    margin-left: 10px;
  }
`;

export const MyMenuItem = styled(MenuItem)`
  && {
    width: 40vw;
    margin: 2vw;
    padding: 2vw;
    border: 2px double var(--borderColorOne);
    border-radius: 10px;
    box-shadow: 0 0 10px var(--shadowColor);
    color: var(--textColor);
    background-color: var(--colorOne);

    &:hover {
      background-color: var(--hoverColor);
      transition: 300ms;
    }
  }

  @media (min-width: 768px) {
    && {
    width: 20vw;
    margin: 1vw;
    padding: 1vw;
  }
`;
