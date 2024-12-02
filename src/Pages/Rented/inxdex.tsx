import { Container } from "@mui/material";
import React from "react";
import Header from "../Header";

type Props = {};

function Rented({}: Props) {
  return (
    <>
      <Header />
      <Container maxWidth="xl"></Container>
    </>
  );
}

export default Rented;
