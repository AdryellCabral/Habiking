import styled from "styled-components";
import MenuItem from "@material-ui/core/MenuItem";

export const Breaker = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--colorThree);
  border-bottom: 2px dotted var(--colorTwo);
  box-shadow: 0 2px 10px var(--colorOne);
  margin-bottom: 4vh;
`;

export const DesktopMenuContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    min-width: 50vw;
    margin-left: -100px;

    button {
      font-size: 2rem;
      background: transparent;
      text-transform: uppercase;
      color: var(--colorOne);
      border-bottom: 2px solid var(--colorOne);
      border-radius: 0 0 10px 10px;
      padding: 10px;
      -webkit-text-stroke: 1px #eea904;

      &:hover {
        color: var(--colorTwo);
        border-bottom: 2px solid var(--colorTwo);
        transition: 300ms;
      }
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-family: "Staatliches", cursive;
    font-size: 2rem;
    -webkit-text-stroke: 1px #eea904;
  }
  img {
    width: 60px;
    margin-right: 5px;
  }

  @media (min-width: 768px) {
    h3 {
      font-family: "Staatliches", cursive;
      font-size: 3rem;
      -webkit-text-stroke: 1px #eea904;
    }
    img {
      width: 100px;
      margin-right: 5px;
    }
  }
`;

export const MyMenuItem = styled(MenuItem)`
  && {
    width: 40vw;
    margin: 2vw;
    padding: 2vw;
    border: 2px double var(--colorTwo);
    border-radius: 10px;
    box-shadow: 0 0 10px var(--colorOne);
    color: var(--colorTwo);
    background-color: var(--colorOne);

    &:hover {
      color: var(--colorOne);
      border: 2px double var(--colorOne);
      background-color: var(--colorTwo);
      transition: 300ms;
    }

    @media (min-width: 768px) {
      width: 20vw;
      margin: 1vw;
      padding: 1vw;
    }
  }

  @media (min-width: 768px) {
    && {
      width: 20vw;
      margin: 1vw;
      padding: 1vw;
    }
  }
`;
