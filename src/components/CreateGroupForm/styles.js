import styled from 'styled-components';

export const FormStyled = styled.form`
    display: flex;
    margin: 40px auto;
    align-self: center;
    width: 90%;
    border: 2px double var(--borderColor);
    border-radius: 10px;
    color: var(--textColor);
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 600px;

    >div {
        width: 210px;
        height: 40px;
        margin: 15px 0;
    }

    @media (min-width:768px){
        width: 100%;
        border-right: none;
        border-left: none;
        border-radius: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        >div {
            width: 400px;
            height: 50px;    
        }
    }
`