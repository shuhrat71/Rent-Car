import Header from "../Header";
import { MainSection } from "./homeStyled";
import Filter from "./Components/Selectors";
type Props = {};

function Home({}: Props) {
  return (
    <>
      <Header />
      <MainSection>
        <Filter />
      </MainSection>
    </>
  );
}

export default Home;
