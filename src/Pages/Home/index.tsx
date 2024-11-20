import React, { useState } from "react";
import Header from "../Header";

import UnstyledSelectIntroduction from "./Components/Selectors";
import { MainSection } from "./homeStyled";
type Props = {};

function Home({}: Props) {
  return (
    <>
      <Header />
      <MainSection>
        <UnstyledSelectIntroduction />
      </MainSection>
    </>
  );
}

export default Home;
