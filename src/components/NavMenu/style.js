import styled from "styled-components";
import MenuItem from "@material-ui/core/MenuItem";

export const Breaker = styled.div`
  display: flex;
  border-bottom: 2px solid var(--borderColor);
  box-shadow: 0 0 10px var(--colorOne);
`;

export const MyMenuItem = styled(MenuItem)`
  width: 40vw;
  margin: 2vw;
  padding: 2vw;
  border: 2px double var(--borderColor);
  border-radius: 10px;
  box-shadow: 0 0 10px var(--shadowColor);
  color: var(--textColor);
  background-color: var(--colorOne);

  &:hover {
    background-color: var(--colorThree);
    transition: 300ms;
  }
`;
