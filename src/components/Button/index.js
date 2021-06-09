import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";

// Estilização Básica.

const MyButton = styled(Button)({
  width: "40vw",

  margin: "2vw",
  padding: "2vw",

  backgroundColor: "var(--colorOne)",
  border: "1px double var(--colorSix)",

  borderRadius: "10px",

  boxShadow: "0 0 10px black",

  color: "var(--colorSix)",

  "&:hover": {
    backgroundColor: "var(--colorThree)",
    transition: "300ms",
  },
});

const ButtonComp = ({ PropFunction, children }) => {
  return <MyButton onClick={PropFunction}>{children}</MyButton>;
};

export default ButtonComp;
