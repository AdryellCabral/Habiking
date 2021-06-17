import styled from "styled-components";

export const DivBackground = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivContainer = styled.div`
  max-width: 310px;
  display: flex;
  flex-direction: column;
  height: 85%;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 80%;
    height: 80%;
  }
`;

export const DivDescription = styled.div`
  justify-content: space-around;
  background-color: var(--colorOne);
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 90vw;
  height: 50%;
  text-align: center;
  padding: 20px;
  border-bottom: 1px dotted var(--colorTwo);
  box-shadow: 0 0 10px var(--colorOne);

  h3 {
    font-size: 30px;
    color: black;
    font-family: "Roboto", sans-serif;
  }

  h4 {
    font-size: 20px;
    padding: 0 20px;
    color: var(--colorTwo);
    text-decoration: none;
    margin-top: -100px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (min-width: 768px) {
    border: 0;
    border-radius: 10px 0 0 10px;
    border-right: 1px dotted var(--colorTwo);
    align-self: center;
    height: 80%;
    justify-content: space-evenly;

    h4 {
      wid

    }
  }
`;

export const LogoContainer = styled.div`
  h3 {
    font-family: "Staatliches", cursive;
    font-size: 3rem;
    -webkit-text-stroke: 1px #eea904;
  }
  img {
    width: 100px;
  }
`;

export const DivButtons = styled.div`
  background-color: var(--colorThree);
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 90vw;
  padding: 4vh;
  text-align: center;
  justify-content: space-evenly;
  border-radius: 0 0 10px 10px;
  border-top: 1px dotted var(--colorTwo);
  box-shadow: 0 0 10px var(--colorOne);

  div {
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
  }

  p {
    font-size: 1.2rem;
    padding: 0 30px;
    color: var(--colorTwo);
    text-decoration: none;
    margin-top: 20px;
  }

  a {
    color: inherit;
  }

  @media (min-width: 768px) {
    align-self: center;
    height: 80%;
    width: 75%;
    border-radius: 0 10px 10px 0;
    border: 0;
    border-left: 1px dotted var(--colorTwo);

    p {
      margin-bottom: 20px;
    }

    && {
      a {
        button {
          width: 225px;
          height: 80px;
          margin: 0;
        }
      }
    }
  }
`;
