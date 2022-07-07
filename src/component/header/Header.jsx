import React, { useState } from "react";
import { Add, Close, Person, ShoppingCart } from "@mui/icons-material";
import {
  alpha,
  AppBar,
  Button,
  InputBase,
  styled,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Login from "../LoginPage/Login";
import { Link } from "react-router-dom";

const Header = ({ CartItem }) => {
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 600,
    bgcolor: "background.paper",
    border: "2px solid white",
    boxShadow: 24,
    p: 4,

    "&:focus": {
      outline: "none",
    },
  };

  const Search = styled("div")(({ theme }) => ({
    position: "sticky",
    borderRadius: "30px",
    // borderColor:"red",
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    // marginRight: theme.spacing(2),
    marginLeft: 0,
    // width: '450px',

    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "50%",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  return (
    <>
      <AppBar sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography
            sx={{
              marginLeft: "8%",
              marginRight: "4%",
              fontFamily: "Inter",
              fontWeight: "bold",
              color: "#ad254e",
              fontSize: "22px",
            }}
          >
            HS FURNITURE
          </Typography>

          <Add sx={{ marginRight: "2%" }} />
          <Search sx={{ marginRight: "8%" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Person
            sx={{ marginRight: "5%", color: "#4c4b4b", cursor: "pointer" }}
            onClick={() => setOpen(true)}
          />

          <Modal
            hideBackdrop
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Close
                sx={{ cursor: "pointer" }}
                onClick={() => setOpen(false)}
              />
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <Login />
              </Typography>
            </Box>
          </Modal>

          
          <Link to="/cart">
            <Box>
          <Typography sx={{backgroundColor:"red", borderRadius:"50%",marginLeft:"40%"}}>{CartItem.length === 0 ? "" : CartItem.length}</Typography>
          </Box>
            <ShoppingCart 
              sx={{ marginRight: "4%", color: "#4c4b4b", cursor: "pointer" }}
            />
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
