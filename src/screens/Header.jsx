import React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
// import { MenuIcon } from "@mui/icons-material/Menu";
// import ManuIcon from @mui

function Header() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: "flex" }}
            >
              <Link
                style={{ color: "#FFF", textDecoration: "none" }}
                // sx={{ color: "#FFF", textDecoration: "none" }}
                to={"/"}
              >
                Header
              </Link>
            </Typography>

            <Button color="inherit">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={"/sign-in"}
              >
                {" "}
                Login.
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;
