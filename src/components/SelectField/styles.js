import styled from "styled-components";
import { FormControl } from "@material-ui/core";

export const FormControlStyled = styled(FormControl)`
  && {
    width: 210px;
    height: 40px;
    margin-bottom: 20px;
    box-shadow: 0 0 10px var(--colorOne);

    * {
      color: var(--colorTwo);
      border-color: var(--colorTwo);
      box-shadow: 0 0 10px var(--colorOne);
    }

    @media (min-width: 768px) {
      width: 400px;
      height: 50px;
    }
  }
`;
