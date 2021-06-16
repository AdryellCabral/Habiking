import styled, { css } from "styled-components";

export const DivContainer = styled.div`
  width: 80%;
  margin: 0 auto;

  a {
    color: white;
  }

  && {
    button {
      width: 100%;
      margin-left: 0;
      padding: 0;
      height: 50px;
      margin-right: 0;
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
    border: 2px double var(--borderColor);
    margin-top: 15px;
    padding: 5px;
    height: 250px;
    background-color: whitesmoke;
    overflow: auto;
    overflow-x: hidden;
    > h3 {
      text-align: center;
    }
  }

  #users {
    li#creator {
      padding: 5px;
      border: 2px double var(--borderColor);
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
