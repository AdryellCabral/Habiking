import styled from "styled-components";

export const DivContainer = styled.div`
  div {
    width: 100%;
    color: white;
    background-color: var(--colorThree);
    border-radius: 10px;
    color: var(--colorTwo);
    border: 2px solid var(--colorThree);

    label,
    svg {
      color: var(--colorTwo);
    }

    fieldset {
      border-color: var(--colorTwo);
    }
  }
`;

export const DivGroups = styled.div`
  overflow: auto;
  overflow-x: hidden;
  height: 250px;
  margin-top: 40px;
  margin-bottom: 20px;
  background-color: whitesmoke;
  padding: 5px;

  p {
    text-align: center;
    color: var(--colorTwo);
    font-size: 1.5rem;
  }

  button {
    margin: 10px;
  }

  @media (min-width: 768px) {
    height: 400px;
  }
`;
