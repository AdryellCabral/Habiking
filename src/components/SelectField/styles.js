import styled from 'styled-components'; 
import { FormControl } from '@material-ui/core';

export const FormControlStyled = styled(FormControl)`
    && {
        width: 210px;
        height: 40px;
        margin-top: 25px;

    @media (min-width:768px) {
        width: 400px;
        height: 50px;
    }
    }
`