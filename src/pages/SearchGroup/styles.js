import styled from "styled-components";
import ButtonComp from "../../components/ButtonComp";

export const Breaker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchButton = styled(ButtonComp)`
  margin-left: 0;
  border-radius: 0 10px 10px 0;
  box-shadow: 0;
  z-index: -1;
  border-left: 0;
`;

export const TextField = styled.textarea`
  width: 80vw;
  min-height: 5.2vh;

  margin: 10px 0 10px 10px;

  border: 2px solid var(--borderColor);
  border-right: 0;
  border-radius: 10px 0 0 10px;
  background-color: var(--colorTwo);
`;

export const GroupsDisplay = styled.div`
  align-self: center;
  width: 82vw;
  height: 62vh;
  border: 2px solid var(--borderColor);
  box-shadow: 0 0 10px var(--shadowColor);
  background-color: var(--colorTwo);
`;
