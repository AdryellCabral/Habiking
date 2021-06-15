import styled from 'styled-components';

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin: 25px auto;
    justify-content: center;
    align-items: center;
    max-width: 80%;

    input {
        width: 210px;
        height: 40px;
        margin-top: 15px;
    }

    @media (min-width:768px){
        input {
            width: 400px;
            height: 50px;
        }
    }
`