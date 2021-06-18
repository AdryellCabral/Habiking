import styled from "styled-components";
import { Container } from "@material-ui/core";

export const Breaker = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerStyled = styled(Container)`
  && {
    margin: 0;
    padding: 0;

    h2 {
      text-align: center;
      margin-bottom: 20px;
      border-bottom: 2px solid var(--colorTwo);
      border-radius: 0 0 10px 0;
      text-transform: uppercase;
      margin: 10px;
      color: var(--colorTwo);
    }
  }
`;
