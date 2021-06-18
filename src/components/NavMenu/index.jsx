import { useState } from "react";
import ButtonComp from "../ButtonComp";
import {
  Breaker,
  LogoContainer,
  MyMenuItem,
  DesktopMenuContainer,
} from "./style";
import Menu from "@material-ui/core/Menu";
import Logo from "../../assets/imgs/logo.png";

import { Link } from "react-router-dom";
import { useToken } from "../../providers/UserToken";

const menuStyle = {
  style: {
    marginTop: "-2vh",
    background: "var(--colorOne)",
    border: "2px solid var(--borderColorOne)",
  },
};

const NavMenu = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const { setUserToken } = useToken();
  const handleResizeWindow = () => setWidth(window.innerWidth);
  window.addEventListener("resize", handleResizeWindow);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setTimeout(() => {
      setAnchorEl(null);
    }, 200);
  };

  const handleLogout = () => {
    localStorage.clear();
    setUserToken("");
    handleClose();
  };

  return (
    <Breaker>
      <LogoContainer>
        <img src={Logo} alt="siteLogo" />
        <h3>Habiking</h3>
      </LogoContainer>

      {width < 768 ? (
        <>
          <ButtonComp
            aria-controls="NavMenu"
            aria-haspopup="true"
            PropFunction={handleClick}
          >
            Menu
          </ButtonComp>
          <Menu
            id="NavMenu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={menuStyle}
          >
            <Link to="/user">
              <MyMenuItem onClick={handleClose}>Usuário</MyMenuItem>
            </Link>
            <Link to="/groups">
              <MyMenuItem onClick={handleClose}>Grupos</MyMenuItem>
            </Link>
            <Link to="/">
              <MyMenuItem onClick={handleLogout}>Deslogar</MyMenuItem>
            </Link>
          </Menu>
        </>
      ) : (
        <DesktopMenuContainer>
          <Link to="/user">
            <button onClick={handleClose}>Usuário</button>
          </Link>
          <Link to="/groups">
            <button onClick={handleClose}>Grupos</button>
          </Link>
          <Link to="/">
            <button onClick={handleLogout}>Deslogar</button>
          </Link>
        </DesktopMenuContainer>
      )}
    </Breaker>
  );
};

export default NavMenu;
