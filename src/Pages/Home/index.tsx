import Header from "../Header";
import { MainSection } from "./homeStyled";
import Filter from "./Components/Selectors";
import BackgroundVideo from "../../assets";
import { Container, Typography } from "@mui/material";
import {
  JourneyStepsCards,
  JourneyStepsIcon,
  JourneyStepsText,
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
import Footer from "../../Pages/Home";
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
              <JourneyStepsTitle>
                <Typography variant="h1">Ko'rib chiqing va tanlang</Typography>
                <JourneyStepsText>
                  <Typography variant="body1">
                    Bizning keng assortimentdagi premium avtomobillarimizdan
                    tanlang, olib ketish va qaytarish sanalari va o'zingizga mos
                    keladigan joylarni tanlang.
                  </Typography>
                </JourneyStepsText>
              </JourneyStepsTitle>
            </JourneyStepsCards>
            <JourneyStepsCards>
              <JourneyStepsIcon>
                <EventAvailableIcon />
              </JourneyStepsIcon>
              <JourneyStepsTitle>
                <Typography variant="h1">
                  Buyurtma qiling va tasdiqlang
                </Typography>
                <JourneyStepsText>
                  <Typography variant="body1">
                    Bir necha marta bosish orqali kerakli mashinangizni bron
                    qiling va elektron pochta yoki SMS orqali darhol tasdiqlov
                    oling.
                  </Typography>
                </JourneyStepsText>
              </JourneyStepsTitle>
            </JourneyStepsCards>
            <JourneyStepsCards>
              <JourneyStepsIcon>
                <InsertEmoticonIcon />
              </JourneyStepsIcon>
              <JourneyStepsTitle>
                <Typography variant="h1">
                  Haydashingizdan rohatlaning
                </Typography>
                <JourneyStepsText>
                  <Typography variant="body1">
                    Mashinangizni belgilangan joyda olib boring va bizning
                    yuqori sifatli xizmatimiz bilan yuqori darajadagi haydash
                    tajribangizdan bahramand bo'ling.
                  </Typography>
                </JourneyStepsText>
              </JourneyStepsTitle>
            </JourneyStepsCards>
          </JourneyStepsWrapper>
          <Process_img>
            <img src={jeep} alt="" />
          </Process_img>
        </Rental_Process>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
