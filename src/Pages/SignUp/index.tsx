import { Box, Container } from "@mui/system";
import React from "react";
import { InputBox, SignInWrapper } from "./SignUp";
import { Button, Link, TextField, Typography } from "@mui/material";

type Props = {};

function SignUp({}: Props) {
  return (
    <Container
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignInWrapper>
        <Typography variant="h1" fontSize={"29px"} marginBottom={"8px"}>
          Create an account
        </Typography>
        <Typography variant="subtitle1" textAlign={"center"}>
          Create an account to enjoy all the services without any ads for free!
        </Typography>
        <InputBox>
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            sx={{
              width: "100%",
              background: "#FFFFFF",
            }}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            sx={{
              width: "100%",
              background: "#FFFFFF",
            }}
          />
        </InputBox>
      </SignInWrapper>
    </Container>
  );
}

export default SignUp;
