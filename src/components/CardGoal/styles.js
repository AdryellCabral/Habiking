import styled from "styled-components";

export const DivContainer = styled.div`
  margin-top: 10px;
  text-align: left;

  background-color: lightgray;
  border-radius: 5px;
  padding: 5px;

  h2,
  h3 {
    margin-bottom: 5px;
  }

  && {
    button {
      margin: 0;
      width: 100px;
    }
  }

  .completed {
    color: green;
  }
`;
