import styled from "styled-components";

export const DivContainer = styled.div`
  div {
    width: 100%;
    color: white;

    label,
    svg {
      color: white;
    }

    fieldset {
      border-color: white;
    }
  }
`;

export const DivGroups = styled.div`
  overflow: auto;
  overflow-x: hidden;
  height: 250px;
  margin-top: 64px;
  background-color: whitesmoke;
  padding: 5px;
  p {
    color: black;
  }
  button {
    margin-bottom: 15px;
  }

  @media (min-width: 768px) {
    height: 400px;
  }
`;
