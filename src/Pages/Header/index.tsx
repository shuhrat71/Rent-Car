import React, { useState } from "react";
import {
  Auth_buttons,
  HeaderLink,
  HeaderLinkWrapper,
  HeaderWrapper,
  LogoBox,
} from "./headerStyled";
import rentCarLogo from "../img/rentCarLogo.jpg";
import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LogoGif } from "./headerStyled";
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
        <LogoBox>
          <LogoGif>
            <img src={rentCarLogo} alt="" />
          </LogoGif>
        </LogoBox>
        <HeaderLinkWrapper>
          <HeaderLink>
            <Typography variant="h1">Rent Car</Typography>
          </HeaderLink>
        </HeaderLinkWrapper>
        <Auth_buttons>
          <Button variant="contained" onClick={handleButtonClick}>
            Sign In
          </Button>
          <Button variant="contained" onClick={handleSignUpClick}>
            Sign Up
          </Button>
        </Auth_buttons>
      </HeaderWrapper>
    </Container>
  );
}

export default Header;
