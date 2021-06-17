import { DivContainer } from "./styles.js";
import Logo from "../../assets/imgs/logo.png";
const Loader = () => {
  return (
    <DivContainer>
      <div className="loader">
      </div>
        <img src={Logo} alt="logo" className="logo"></img>
    </DivContainer>
  );
};

export default Loader;
