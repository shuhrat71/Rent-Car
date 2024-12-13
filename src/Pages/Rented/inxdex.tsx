import { useParams } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { Typography, Box, Container } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { CarDetail } from "../Home/Components/Card/card";
import CardContent from "@mui/material/CardContent";
import speedometr from "../Home/Components/Selectors/img/speedometer.svg";
import gearbox from "../Home/Components/Selectors/img/gearbox.svg";
import user from "../Home/Components/Selectors/img/user.svg";
import gasStation from "../Home/Components/Selectors/img/gasStation.svg";
import CircularProgress from "@mui/material/CircularProgress";
import { CarInfo, RentedCar_Wrapper } from ".";
import Header from "../Header";
import { createClient } from "@supabase/supabase-js";

type CardDetailParams = {
  id: string;
};
interface Cars {
  id: string;
  name: string;
  img: string;
  number: number;
  textcar: string;
  tachometer: string;
  gearbox: string;
}
const CardDetail: React.FC = () => {
  const { id } = useParams<CardDetailParams>();
  const [card, setCard] = useState<Cars>();
  const [loading, setLoading] = useState(true);

  const supabaseUrl = "https://wdybqcunwsmveabxiekf.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkeWJxY3Vud3NtdmVhYnhpZWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzODkyNzYsImV4cCI6MjA0ODk2NTI3Nn0.Fyo48A9AP7-VcERAFEvq2TdZF2Ug2Kr1FwDAgpnp90o";
  const supabase = createClient(supabaseUrl, supabaseKey);

  useEffect(() => {
    const fetchDataById = async (id: any) => {
      try {
        const { data, error } = await supabase
          .from("car data")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          console.error("Error fetching data by ID:", error.message);
          return null;
        }
        setCard(data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    };
    if (id) {
      fetchDataById(id);
    }
  }, [id]);

  if (!id || isNaN(Number(id))) {
    return <p>Error: Invalid or missing ID</p>;
  }
  if (!card) {
    return <p></p>;
  }
  function CircularIndeterminate() {
    return (
      <Box
        sx={{
          display: "flex",
          height: "70vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  if (loading) {
    return CircularIndeterminate();
  }
  return (
    <Container>
      <Header />
      <h1>Card Detail</h1>
      <RentedCar_Wrapper>
        <Box sx={{ maxWidth: 400 }} key={card.id}>
          <CardMedia
            component="img"
            height="190"
            image={card.img}
            alt={card.name}
          />
          <CardContent>
            <Typography sx={{ fontSize: "27px" }} variant="h1">
              {card.name}
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
                mt: 2,
              }}
            >
              <CarDetail>
                <div className="speedometr box">
                  <img src={speedometr} alt="" />
                  <p>{card.tachometer}</p>
                </div>
                <div className="gearbox box">
                  <img src={gearbox} alt="" />
                  <p>{card.gearbox}</p>
                </div>
                <div className="person box">
                  <img src={user} alt="" />
                  <p>{card.number}</p>
                </div>
                <div className="petrol box">
                  <img src={gasStation} alt="" />
                  <p>{card.textcar}</p>
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
