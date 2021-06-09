import { useState } from "react";
import ButtonComp from "../ButtonComp";
import { Breaker } from "./style";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { styled } from "@material-ui/core/styles";
import { FaCompressArrowsAlt } from "react-icons/fa";

import { Link } from "react-router-dom";

const NavMenu = () => {
  const MyMenuItem = styled(MenuItem)({
    width: "40vw",
    margin: "2vw",
    padding: "2vw",
    border: "2px double var(--borderColor)",
    borderRadius: "10px",
    boxShadow: "0 0 10px var(--shadowColor)",
    color: "var(--textColor)",
    backgroundColor: "var(--colorOne)",

    "&:hover": {
      backgroundColor: "var(--colorThree)",
      transition: "300ms",
    },
  });

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setTimeout(() => {
      setAnchorEl(null);
    }, 200);
  };

  return (
    <Breaker>
      <ButtonComp
        aria-controls="NavMenu"
        aria-haspopup="true"
        PropFunction={handleClick}
      >
        Go To <FaCompressArrowsAlt style={{ marginLeft: "10px" }} />
      </ButtonComp>
      <Menu
        id="NavMenu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            background: "var(--colorOne)",
            border: "2px solid var(--borderColor)",
          },
        }}
      >
        <Link to="/user">
          <MyMenuItem onClick={handleClose}>User</MyMenuItem>
        </Link>
        <Link to="/groups">
          <MyMenuItem onClick={handleClose}>Groups</MyMenuItem>
        </Link>
        <Link to="/login">
          <MyMenuItem onClick={handleClose}>Logout</MyMenuItem>
        </Link>
      </Menu>
    </Breaker>
  );
};

export default NavMenu;
