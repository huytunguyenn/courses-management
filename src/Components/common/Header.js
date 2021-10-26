import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  const activeStyle = { color: "#F1E4D3" };

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          <NavLink
            to="/"
            style={{ textDecoration: "none" }}
            activeStyle={activeStyle}
            exact
          >
            Trang chủ{" | "}
          </NavLink>
          <NavLink
            to="/courses"
            style={{ textDecoration: "none" }}
            activeStyle={activeStyle}
          >
            Khóa học{" | "}
          </NavLink>
          <NavLink
            to="/about"
            style={{ textDecoration: "none" }}
            activeStyle={activeStyle}
          >
            About{" "}
          </NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
