import React, { useState } from "react";
import Header from "../Header";

import UnstyledSelectIntroduction from "./Components/Selectors";
import { MainSection } from "./homeStyled";
import { CardBody } from "./Components/Card/card";
import CardComm from "./Components/Card";
import AdminPanel from "../Admin";
import Filter from "./Components/Selectors";
type Props = {};

function Home({}: Props) {
  return (
    <>
      <Header />
      <MainSection>
        <Filter />
        <CardBody>{/* <CardComm /> */}</CardBody>
        {/* <AdminPanel /> */}
      </MainSection>
    </>
  );
}

export default Home;
