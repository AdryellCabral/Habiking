import { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { styled } from "@material-ui/core/styles";
import ButtonComp from "../Button";
import { Breaker } from "./style";
import { FaCompressArrowsAlt } from "react-icons/fa";

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

  return (
    <Breaker>
      <ButtonComp
        aria-controls="simple-menu"
        aria-haspopup="true"
        PropFunction={handleClick}
      >
        Go To <FaCompressArrowsAlt style={{ marginLeft: "10px" }} />
      </ButtonComp>
      <Menu
        id="simple-menu"
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
        <MyMenuItem onClick={handleClose}>Profile</MyMenuItem>
        <MyMenuItem onClick={handleClose}>Groups</MyMenuItem>
        <MyMenuItem onClick={handleClose}>Logout</MyMenuItem>
      </Menu>
    </Breaker>
  );
};

export default NavMenu;
