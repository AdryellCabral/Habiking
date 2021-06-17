import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const Breaker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  #buttons-container {
    display: flex;
    justify-content: center;

    @media (min-width: 768px) {
      button {
        height: 40px;
      }
    }
  }
`;

export const SearchButton = styled(Button)`
  && {
    width: 40vw;
    height: 40px;
    margin: 4vw;
    margin-top: 0;
    padding: 2vw;
    background-color: var(--colorOne);
    border: 2px double var(--colorTwo);
    border-left: 0;
    margin-left: 0;
    border-radius: 0 10px 10px 0;
    color: var(--colorTwo);

    span {
      color: var(--colorTwo);
    }

    a {
      color: var(--colorTwo);
    }

    &:hover {
      border: 2px double var(--colorOne);
      border-left: 0;
      background-color: var(--colorTwo);
      color: var(--colorOne);
      transition: 300ms;

      a {
        color: var(--colorOne);
      }

      span {
        color: var(--colorOne);
      }
    }
  }

  @media (min-width: 768px) {
    && {
      width: 12vw;
      height: 37px;
      padding: 0;
      margin: 0;
    }
  }
`;

export const TextField = styled.input`
  width: 200px;
  height: 32px;

  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;

  margin: 10px 0 10px 10px;
  margin: 4vw;
  margin-right: 0;
  margin-top: 0;
  overflow-y: hidden;

  border: 2px solid var(--colorTwo);
  border-radius: 10px;
  /* border-right: 0; */
  color: var(--colorTwo);
  background-color: var(--colorOne);
  text-align: center;

  @media (min-width: 768px) {
    width: 300px;
    height: 33px;
    margin: 0;
    padding: 0;
  }
`;

export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  margin-bottom: 20px;
  align-self: center;
  width: 90vw;
  height: 76vh;

  overflow: auto;
  overflow-x: hidden;

  border: 2px solid var(--colorThree);
  box-shadow: 0 0 10px var(--colorOne);
  background-color: var(--colorOne);
  border-radius: 10px;

  p {
    padding: 5px;
    font-size: 1.2rem;
    color: var(--colorTwo);
    border-bottom: 2px solid var(--colorTwo);
    border-radius: 10px;
    width: 60vw;
    margin: auto;

    @media (min-width: 768px) {
      width: 14vw;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 66vw;
    height: 60vh;
  }

  h5 {
    font-size: 1.4rem;
    color: var(--colorTwo);
    padding: 5px;
    border-bottom: 2px solid var(--colorTwo);
    border-radius: 10px;

    @media (min-width: 768px) {
      font-size: 1.2rem;
      width: 10vw;
      margin: auto;
    }
  }
`;
