import {
  Box,
  Button,
  Container,
  Grid,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import Modal from "@mui/material/Modal";
import { Close,} from "@mui/icons-material";
import React, { useState } from "react";
import Login from "../LoginPage/Login";

const RegistrationPage = () => {


  const [open, setOpen] = React.useState(false);
 

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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // console.log(errors);

  const onSub = (data) => {
    data.id = Date.now();
    data.fav = false;
    // formSub(data);
    console.log(data);
    reset();
  };
  const LoginButton = styled(Button)({
    backgroundColor: "#e94560",
    color: "white",
    "&:hover": {
      backgroundColor: "#42050f",
    },
  });
  return (
    <Container maxWidth="xs">
      <Typography
        variant="h3"
        sx={{
          marginBottom: "10%",
          marginLeft: "28%",

          fontFamily: "Inter",
          fontWeight: "bold",
          color: "#ad254e",
        }}
      >
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit(onSub)}>
        <Grid container direction={"column"} spacing={4} marginBottom={4}>
          <Grid item>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              color="secondary"
              {...register("Email", {
                required: "Email is Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid Email address",
                },
              })}
            />
            {errors.Email && (
              <Typography sx={{ color: "red" }}>
                {errors.Email.message}
              </Typography>
            )}
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="password"
              type="password"
              variant="outlined"
              color="secondary"
              {...register("password", {
                required: "Password is Required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
                  message: "Invalid Password",
                },
              })}
            />
            {errors.password && (
              <Typography sx={{ color: "red" }}>
                {errors.password.message}
              </Typography>
            )}
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="Phone"
              type="password"
              variant="outlined"
              color="secondary"
              {...register("Phone", {
                required: "Phone number is Required",
                pattern: {
                    value:
                      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                    message: "Invalid phone no",
                  },
              })}
            />
            {errors.password && (
              <Typography sx={{ color: "red" }}>
                {errors.Phone.message}
              </Typography>
            )}
          </Grid>
        </Grid>
        <LoginButton
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Register
        </LoginButton>
        <Button
          fullWidth
          sx={{
            paddingTop: "10%",
            color: "#fb982f",
            "&:hover": {
              backgroundColor: "white",
            },
          }}
          onClick={() => setOpen(true)}
        >
          <Modal
            hideBackdrop
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Close sx={{cursor: "pointer"}} onClick={() => setOpen(false)} />
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <Login />
              </Typography>
            </Box>
          </Modal>
          Allready registered Login
        </Button>
      </form>
    </Container>
  );
};

export default RegistrationPage;
