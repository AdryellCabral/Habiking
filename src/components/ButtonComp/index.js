import { MyButton } from "./styles";

const ButtonComp = ({ PropFunction, children, disabled, ...rest }) => {
  return (
    <MyButton disabled={disabled} onClick={PropFunction} {...rest}>
      {children}
    </MyButton>
  );
};

export default ButtonComp;
