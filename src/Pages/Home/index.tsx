import React, { useState } from "react";
import Header from "../Header";

import UnstyledSelectIntroduction from "./Components/Selectors";
import { MainSection } from "./homeStyled";
import { CardBody } from "./Components/Card/card";
type Props = {};

function Home({}: Props) {
  return (
    <>
      <Header />
      <MainSection>
        <UnstyledSelectIntroduction />
        <CardBody>ksdcbhbc</CardBody>
      </MainSection>
    </>
  );
}

export default Home;
