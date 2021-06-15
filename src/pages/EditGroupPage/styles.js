import styled from 'styled-components';
import { Container } from '@material-ui/core';

export const ContainerStyled = styled(Container)`
    &&{
        text-align: center;

        h2 {
            margin: 25px auto;
        }

        hr {
            max-width: 80%;
            margin: 30px auto;
        }
    }
`