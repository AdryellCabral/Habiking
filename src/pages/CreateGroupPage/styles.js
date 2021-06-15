import styled from "styled-components";
import { Container } from "@material-ui/core";

export const ContainerStyled = styled(Container)`
  && {
    width: 80%;
    margin: 30px auto;
    padding: 5px;
    border: 2px double var(--borderColor);
    border-radius: 10px;
    box-shadow: 0 0 10px var(--shadowColor);
    color: var(--textColor);
    text-align: center;

    @media (min-width:768px){
      width: 100%;
      border-left: none;
      border-right: none;
      border-radius: 0;
      margin-top: 25vh;
    }
  }
`