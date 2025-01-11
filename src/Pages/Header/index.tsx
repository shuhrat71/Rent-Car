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
import { ROUTE_PATHS } from "../../routes/paths";
type Props = {};

function Header({}: Props) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(ROUTE_PATHS.LOG_IN);
  };
  const handleSignUpClick = () => {
    navigate(ROUTE_PATHS.SIGN_UP);
  };
  return (
    <Container maxWidth="xl">
      <HeaderWrapper>
        {/* <LogoWrapper>
          <img src={rentCarLogo} alt="" />
        </LogoWrapper> */}

        <Auth_buttons>
          <Button variant="contained" onClick={handleSignUpClick}>
            Sign up
          </Button>
          <Button variant="contained" onClick={handleButtonClick}>
            Log In
          </Button>
        </Auth_buttons>
      </HeaderWrapper>
    </Container>
  );
}

export default Header;
