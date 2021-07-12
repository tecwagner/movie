import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MovieIcon from "@material-ui/icons/Theaters";
import Typography from "@material-ui/core/Typography";

const Header = () => (
  <AppBar position="relative">
    <Toolbar>
      <MovieIcon />
      <Typography variant="h6" color="inherit" noWrap>
        Watch Movies
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
