import React from "react";
import {
  Auth_buttons,
  HeaderLink,
  HeaderLinkWrapper,
  HeaderWrapper,
  LogoBox,
} from "./headerStyled";

import { Button, Container, Typography } from "@mui/material";

type Props = {};

function Header({}: Props) {
  return (
    <Container maxWidth="xl">
      <HeaderWrapper>
        <LogoBox>
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
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </HeaderLink>
          <Auth_buttons>
            <Button variant="contained">Sign In</Button>
            <Button variant="contained">Sign Up</Button>
          </Auth_buttons>
        </HeaderLinkWrapper>
      </HeaderWrapper>
    </Container>
  );
}

export default Header;
