import styled from "styled-components";

export const DivContainerStyled = styled.div`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(#485563 20%, #29323c 75%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DivContainer2Styled = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 85%;
`;

export const DivContainer3Styled = styled.div`
  background-color: ${(props) => `${props.color}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50%;
  text-align: center;
  justify-content: space-between;
  padding: 20px;
`;

export const PStyled = styled.p`
  font-size: 20px;
  padding: 0 20px;
  color: ${(props) => `${props.color}`};
  text-decoration: none;

  a {
    color: inherit;
  }
`;

export const TitleStyled = styled.h3`
  font-size: 30px;
  color: black;
  font-family: "Roboto", sans-serif;
`;

export const ButtonStyled = styled.button`
  background-color: yellow;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 20px;
`;

export const DivContainer4Styled = styled(DivContainer3Styled)`
  justify-content: space-around;
`;
