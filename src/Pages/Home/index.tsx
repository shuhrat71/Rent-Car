import Header from "../Header";
import { MainSection } from "./homeStyled";
import Filter from "./Components/Selectors";
import BackgroundVideo from "../../assets";
type Props = {};

function Home({}: Props) {
  return (
    <>
      <Header />
      <BackgroundVideo />
      <MainSection>
        <Filter />
      </MainSection>
    </>
  );
}

export default Home;
