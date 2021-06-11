import { MyButton } from "./styles";

const ButtonComp = ({ PropFunction, children }) => {
  return <MyButton onClick={PropFunction}>{children}</MyButton>;
};

export default ButtonComp;
