import styled from "styled-components";

export const DivContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.5rem;
  color: var(--colorTwo);
  img {
    width: 50%;
    margin: 25px 0;
  }

  p {
    color: white;
    a {
      text-decoration: none;

      color: var(--colorTwo);
    }
  }

  h3 {
    font-family: "Staatliches", cursive;
    color:black;
    font-size: 3rem;
    -webkit-text-stroke: 1px #eea904;
  }

  @media (min-width:768px){
      img{
          width:25%;
      }
  }
`;
