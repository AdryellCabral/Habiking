import styled from "styled-components";

export const DivContainer = styled.div`
  width: 80%;
  margin: 0 auto;

  && {
    button {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
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
  h3 {
    text-align: center;
  }

  .infos {
    border: 2px double var(--borderColor);
    margin-top: 15px;
    padding: 5px;
    height: 250px;
    background-color: whitesmoke;
    overflow: auto;
    overflow-x: hidden;
  }

  #users {
    li {
      padding: 5px;
      border: 2px double var(--borderColor);
    }
  }
`;
