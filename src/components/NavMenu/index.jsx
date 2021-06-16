import { useState } from "react";
import ButtonComp from "../ButtonComp";
import { Breaker, MyMenuItem } from "./style";
import Menu from "@material-ui/core/Menu";

import { FaCompressArrowsAlt } from "react-icons/fa";

import { Link } from "react-router-dom";

const menuStyle = {
  style: {
    marginTop: "-2vh",
    background: "var(--colorOne)",
    border: "2px solid var(--borderColorOne)",
  },
};

const NavMenu = () => {
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
    localStorage.clear()
    handleClose()
  }

  return (
    <Breaker>
      <ButtonComp
        aria-controls="NavMenu"
        aria-haspopup="true"
        PropFunction={handleClick}
      >
        Go To <FaCompressArrowsAlt />
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
          <MyMenuItem onClick={handleClose}>User</MyMenuItem>
        </Link>
        <Link to="/groups">
          <MyMenuItem onClick={handleClose}>Groups</MyMenuItem>
        </Link>
        <Link to="/login">
          <MyMenuItem onClick={handleLogout}>Logout</MyMenuItem>
        </Link>
      </Menu>
    </Breaker>
  );
};

export default NavMenu;
