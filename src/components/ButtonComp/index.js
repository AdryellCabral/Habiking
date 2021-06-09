import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";

const ButtonComp = ({ PropFunction, children, NewStyles }) => {
  // Estilização Básica.
  const MyButton = styled(Button)({
    ...{
      width: "40vw",
      margin: "4.5vw",
      padding: "2vw",
      backgroundColor: "var(--colorOne)",
      border: "2px double var(--borderColor)",
      borderRadius: "10px",
      boxShadow: "0 0 10px var(--shadowColor)",
      color: "var(--textColor)",

      "&:hover": {
        backgroundColor: "var(--colorThree)",
        transition: "300ms",
      },
    },
    ...NewStyles,
  });

  return <MyButton onClick={PropFunction}>{children}</MyButton>;
};

export default ButtonComp;
