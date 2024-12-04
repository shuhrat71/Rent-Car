import React, { useState } from "react";
import {
  HeaderTitle,
  HeaderWrapper,
  LogoWrapper,
  Auth_buttons,
} from "./headerStyled";
import rentCarLogo from "../img/rentCarLogo.jpg";
import { Button, Container, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
type Props = {};

function Header({}: Props) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/sign-in");
  };
  const navigate2 = useNavigate();
  const handleSignUpClick = () => {
    navigate2("/sign-up");
  };
  return (
    <Container maxWidth="xl">
      <HeaderWrapper>
        <LogoWrapper>
          <img src={rentCarLogo} alt="" />
        </LogoWrapper>
        <HeaderTitle>
          <Typography variant="h1">Rental Car</Typography>
        </HeaderTitle>
        <Auth_buttons>
          <Button variant="contained" onClick={handleButtonClick}>
            Sign In
          </Button>
          <Button variant="contained" onClick={handleSignUpClick}>
            Sign up
          </Button>
        </Auth_buttons>
      </HeaderWrapper>
    </Container>
  );
}

export default Header;
