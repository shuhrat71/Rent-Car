import { useParams } from "react-router-dom";
import { database } from "../Home/Components/Selectors";
import React from "react";
import { Typography, Box, Container } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { CarDetail } from "../Home/Components/Card/card";
import CardContent from "@mui/material/CardContent";
import speedometr from "../Home/Components/Selectors/img/speedometer.svg";
import gearbox from "../Home/Components/Selectors/img/gearbox.svg";
import user from "../Home/Components/Selectors/img/user.svg";
import gasStation from "../Home/Components/Selectors/img/gasStation.svg";
import { CarInfo, RentedCar_Wrapper } from ".";

type CardDetailParams = {
  id: string;
};
const CardDetail: React.FC = () => {
  const { id } = useParams<CardDetailParams>();

  if (!id || isNaN(Number(id))) {
    return <p>Error: Invalid or missing ID</p>;
  }

  const cardId = Number(id);
  const card = database.find((card) => card.id === cardId);
  console.log(card);

  if (!card) {
    return <p>Error: No card found for ID {cardId}</p>;
  }

  return (
    <Container>
      <h1>Card Detail</h1>
      <RentedCar_Wrapper>
        <Box sx={{ maxWidth: 400 }} key={card.id}>
          <CardMedia
            component="img"
            height="190"
            image={card.url}
            alt={card.url}
          />
          <CardContent>
            <Typography sx={{ fontSize: "27px" }} variant="h1">
              {card.carName}
            </Typography>
            <Box
              sx={{
                width: "375px",
                height: "100px",
                display: "flex",
                justifyContent: "center",
                aligncards: "center",
                background: "#F6F6F6",
                borderRadius: "16px",
              }}
            >
              <CarDetail>
                <div className="speedometr box">
                  <img src={speedometr} alt="" />
                  <p>{card.speedometr}</p>
                </div>
                <div className="gearbox box">
                  <img src={gearbox} alt="" />
                  <p>{card.category}</p>
                </div>
                <div className="person box">
                  <img src={user} alt="" />
                  <p>{card.place}</p>
                </div>
                <div className="petrol box">
                  <img src={gasStation} alt="" />
                  <p>{card.petrol}</p>
                </div>
              </CarDetail>
            </Box>
          </CardContent>
        </Box>
        <CarInfo>
          <Typography>jsdbjcv</Typography>
        </CarInfo>
      </RentedCar_Wrapper>
    </Container>
  );
};

export default CardDetail;
