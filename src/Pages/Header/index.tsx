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
import { Link, useNavigate } from "react-router-dom";
import { LogoGif } from "./headerStyled";
import car from "../img/car.gif";
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
          <Typography variant="h1" fontSize="26px">
            Jizzax
            <span
              style={{
                color: "red",
              }}
            >
              Car
            </span>
          </Typography>
        </LogoBox>
        <HeaderLinkWrapper>
          <HeaderLink>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </HeaderLink>

          <Auth_buttons>
            <Button variant="contained" onClick={handleButtonClick}>
              Sign In
            </Button>
            <Button variant="contained" onClick={handleSignUpClick}>
              Sign Up
            </Button>
          </Auth_buttons>
        </HeaderLinkWrapper>
      </HeaderWrapper>
    </Container>
  );
}

export default Header;
