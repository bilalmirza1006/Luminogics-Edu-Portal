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
import { styled } from "@mui/material/styles";
// import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { AppRoutes } from "../routs/RoutConstant";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const user = localStorage.removeItem("token-info");
// console.log("user", user);
function Header() {
  const logout = () => {
    // localStorage.removeItem("token");
    // setToken(null);
    localStorage.clear();

    // setIsLoggedin(false);
    // set;
    console.log("halo");
  };

  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(() => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      // marginTop: theme.spacing(1),
      minWidth: 110,
      // color:
      //   theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      // '& .MuiMenuItem-root': {
      //   '& .MuiSvgIcon-root': {
      //     fontSize: 18,
      //     color: theme.palette.text.secondary,
      //     marginRight: theme.spacing(1.5),
      //   },
      //   // '&:active': {
      //   //   backgroundColor: alpha(
      //   //     theme.palette.primary.main,
      //   //     theme.palette.action.selectedOpacity,
      //   //   ),
      //   // },
      // },
    },
  }));
  const token = localStorage.getItem("token");
  // export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
              {token && (
                <Link
                  style={{ color: "#FFF", textDecoration: "none" }}
                  to={AppRoutes.HOME}
                >
                  Header
                </Link>
              )}
            </Typography>

            <Button color="inherit">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={AppRoutes.SIGNIN}
              >
                {" "}
                Login.
              </Link>
            </Button>
            <div>
              <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                // aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Options
              </Button>
              <StyledMenu
                // id="demo-customized-menu"
                // MenuListProps={{
                //   'aria-labelledby': 'demo-customized-button',
                // }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} disableRipple>
                  {token ? null : (
                    <Link
                      // onClick={logout}
                      to={AppRoutes.USER_PROFILE}
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      Please Signin
                    </Link>
                  )}
                </MenuItem>
                {token && (
                  <MenuItem onClick={handleClose} disableRipple>
                    <Link
                      // onClick={logout}
                      to={AppRoutes.USER_PROFILE}
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      Profile
                    </Link>
                  </MenuItem>
                )}
                {token && (
                  <MenuItem onClick={handleClose} disableRipple>
                    {/* <Button color="inherit" onClick={logout}> */}
                    <Link
                      onClick={logout}
                      to={AppRoutes.SIGNIN}
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      Logout
                    </Link>
                    {/* </Button> */}
                  </MenuItem>
                )}
              </StyledMenu>
            </div>
            {/* <Button color="inherit" onClick={logout}>
              <Link
                to={"/sign-in"}
                style={{ color: "white", textDecoration: "none" }}
              >
                logout.
              </Link>
            </Button> */}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;
