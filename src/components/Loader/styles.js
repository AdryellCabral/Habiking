import styled from "styled-components"

export const DivContainer = styled.div`

.loader {
    animation: is-rotating 1s infinite;
    border: 6px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: var(--colorTwo);
    height: 150px;
    width: 150px;
    position: absolute;
    top: calc(50% - 75px);
    left: calc(50% - 75px);

   
    
}

.logo {
    width: 130px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
}
  
  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
  `