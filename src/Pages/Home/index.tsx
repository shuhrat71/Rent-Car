import Header from "../Header";
import { MainSection } from "./homeStyled";
import Filter from "./Components/Selectors";
import BackgroundVideo from "../../assets";
import { Container, Typography } from "@mui/material";
import {
  JourneyStepsCards,
  JourneyStepsIcon,
  JourneyStepsTitle,
  JourneyStepsWrapper,
  Process_img,
  Process_title,
  Rental_Process,
} from "./howItsWorks";
import jeep from "./Components/Selectors/img/jeep.png";
import SearchIcon from "@mui/icons-material/Search";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
type Props = {};

function Home({}: Props) {
  return (
    <>
      <Header />
      <BackgroundVideo />
      <MainSection>
        <Filter />
      </MainSection>
      <Container maxWidth="xl">
        <Process_title>
          <Typography variant="h1">How it works</Typography>
          <p>
            Hashamatli avtomobilni ijaraga olish hech qachon oson bo'lmagan.
            Bizning soddalashtirilgan jarayonimiz siz tanlagan avtomobilingizni
            onlayn bron qilish va tasdiqlashni osonlashtiradi
          </p>
        </Process_title>
        <Rental_Process>
          <JourneyStepsWrapper>
            <JourneyStepsCards>
              <JourneyStepsIcon>
                <SearchIcon />
              </JourneyStepsIcon>
              <JourneyStepsTitle></JourneyStepsTitle>
            </JourneyStepsCards>
            <JourneyStepsCards>
              <JourneyStepsIcon>
                <EventAvailableIcon />
              </JourneyStepsIcon>
              <JourneyStepsTitle></JourneyStepsTitle>
            </JourneyStepsCards>
            <JourneyStepsCards>
              <JourneyStepsIcon>
                <InsertEmoticonIcon />
              </JourneyStepsIcon>
              <JourneyStepsTitle></JourneyStepsTitle>
            </JourneyStepsCards>
          </JourneyStepsWrapper>
          <Process_img>
            <img src={jeep} alt="" />
          </Process_img>
        </Rental_Process>
      </Container>
    </>
  );
}

export default Home;
