import styled, { css } from "styled-components";

export const DivContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--colorOne);
  border-radius: 10px 10px 0 0;
  box-shadow: 0 0 10px var(--colorOne);
  border: 2px solid var(--colorThree);

  && {
    button {
      width: 100%;
      margin: 0 0 20px 0;
      padding: 0;
      height: 50px;
    }
  }

  @media (min-width: 768px) {
    width: 100%;
    padding-left: 30px;
    padding-right: 10px;

    #buttons-container {
      display: flex;
      justify-content: space-around;
      max-width: 800px;
      margin: 0 auto;

      button {
        width: 250px;
        margin: 15px 0;
      }
    }

    #group-container {
      display: flex;

      #group-list {
        width: 30%;
      }
    }
  }
`;

export const DivGroup = styled.div`
  div#group-info {
    color: var(--colorTwo);

   > h1 {
      align-self: center;
      margin-bottom: 20px;
      border-bottom: 2px solid var(--colorTwo);
      border-radius: 0 0 10px 0;
      height: 26px;
    }

    h2,
    p {
      height: 32px;
    }
  }
  h1 {
    font-size: 1.5rem;
  }

  && {
    div > a > button {
      height: 40px;
    }
  }

  .infos {
    margin: 10px !important;
    border-radius: 10px;
    box-shadow: 0 0 10px var(--colorOne);
    color: var(--colorTwo);
    padding: 5px;
    height: 250px;
    background-color: var(--colorThree);
    overflow: auto;
    overflow-x: hidden;

    h3 {
      text-align: center;
      margin-bottom: 20px;
      border-bottom: 2px solid var(--colorTwo);
      border-radius: 0 0 10px 0;
      text-transform: uppercase;
      margin: 10px;
    }

    div {
      background-color: var(--colorOne);
    }
  }

  #users {
    li#creator {
      padding: 5px;
      border: 2px double var(--colorTwo);
      background-color: var(--colorOne);
    }

    li {
      margin: 5px;
      background-color: transparent;
    }
  }

  @media (min-width: 768px) {
    padding-left: 25px;
    width: 100%;

    #cards-container {
      display: flex;

      div {
        flex-basis: 33.33%;
      }
    }

    #edit-group {
      text-align: center;
    }
    && {
      div > a > button {
        margin: 0;
        margin-top: 10px;
        width: 200px;
      }
    }
  }

  .infos {
    height: 340px;
    margin: 0 5px;
  }
`;

export const Li = styled.li`
  padding: 5px;
  border-radius: 2px;
  ${(props) =>
    props.index % 2 === 0 &&
    css`
      background-color: lightgray;
    `}
`;
