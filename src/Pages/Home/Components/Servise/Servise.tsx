import React from "react";
import {
  Benifit__title,
  Benifit,
  InfoBoxes__wrapper,
  InfoBox,
  Box__icon__wrapper,
} from "./index";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CleanHandsIcon from "@mui/icons-material/CleanHands";
import VerifiedIcon from "@mui/icons-material/Verified";
type Props = {};

function Servise({}: Props) {
  return (
    <>
      <Benifit>
        <Container>
          <Benifit__title>
            <Typography variant="h1">
              Xizmatlarimiz va imtiyozlarimiz
            </Typography>
            <Typography variant="body1">
              To make renting easy and hassle-free, we provide a variety of
              services and advantages. We have you covered with a variety of
              vehicles and flexible rental terms.
            </Typography>
          </Benifit__title>
          <InfoBoxes__wrapper>
            <InfoBox>
              <Box__icon__wrapper>
                <AutoAwesomeIcon />
              </Box__icon__wrapper>
              <Typography variant="h1">Sifat tanlovi</Typography>
              <Typography variant="body1">
                Our rental rates are highly competitive and affordable, allowing
                our customers to enjoy their trips without breaking the bank.
              </Typography>
            </InfoBox>
            <InfoBox>
              <Box__icon__wrapper>
                <CleanHandsIcon />
              </Box__icon__wrapper>
              <Typography variant="h1">Qulay narxlar</Typography>
              <Typography variant="body1">
                Our rental rates are highly competitive and affordable, allowing
                our customers to enjoy their trips without breaking the bank.
              </Typography>
            </InfoBox>
            <InfoBox>
              <Box__icon__wrapper>
                <VerifiedIcon />
              </Box__icon__wrapper>
              <Typography variant="h1">Qulay onlayn bron qilish</Typography>
              <Typography variant="body1">
                With our easy-to-use online booking system, customers can
                quickly and conveniently reserve their rental car from anywhere,
                anytime.
              </Typography>
            </InfoBox>
          </InfoBoxes__wrapper>
        </Container>
      </Benifit>
    </>
  );
}

export default Servise;
