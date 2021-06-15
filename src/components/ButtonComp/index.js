import { MyButton } from "./styles";

const ButtonComp = ({ PropFunction, children, ...rest }) => {
  return <MyButton onClick={PropFunction} {...rest}>{children}</MyButton>;
};

export default ButtonComp;
