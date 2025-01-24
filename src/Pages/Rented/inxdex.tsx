import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Button, Stepper, Step, StepLabel, TextField } from "@mui/material";
import { Typography, Box, Container } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { CarDetail } from "../Home/Components/Card/card";
import CardContent from "@mui/material/CardContent";
import speedometr from "../Home/Components/Selectors/img/speedometer.svg";
import gearbox from "../Home/Components/Selectors/img/gearbox.svg";
import user from "../Home/Components/Selectors/img/user.svg";
import gasStation from "../Home/Components/Selectors/img/gasStation.svg";
import CircularProgress from "@mui/material/CircularProgress";
import { RentedCar_Wrapper, RentedContend__wrapper, Stepper_Wrapper } from ".";
import Header from "../Header";
import { createClient } from "@supabase/supabase-js";
import { toast, ToastContainer } from "react-toastify";

interface Cars {
  id: string;
  name: string;
  img: string;
  number: number;
  textcar: string;
  tachometer: string;
  gearbox: string;
  chevrolet_Logo: string;
}
const CardDetail: React.FC = () => {
  const { id } = useParams();

  const [card, setCard] = useState<Cars>();
  const [loading, setLoading] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");

  const steps = [
    "Pick-up Location",
    "Pick-up Date",
    "Drop-off Location",
    "Drop-off Date",
    "Product",
  ];

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
  const insertCarData = async () => {
    try {
      const { data, error } = await supabase
        .from("rentedLists")
        .insert([
          {
            pickup_location: pickupLocation,
            pickUpDate: pickupDate,
            drop_off_location: dropOffLocation,
            dropOffDate: dropOffDate,
            carId: id,
          },
        ])
        .select();
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };
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

  const handleNext = () => {
    if (activeStep === 0 && !pickupLocation) {
      toast.error("Please enter pick-up location");
      return;
    }
    if (activeStep === 1 && !pickupDate) {
      toast.error("Please enter pick-up date");
      return;
    }
    if (activeStep === 2 && !dropOffLocation) {
      toast.error("Please enter drop-off location");
      return;
    }
    if (activeStep === 3 && !dropOffDate) {
      toast.error("Please enter drop-off date");
      return;
    }
    if (activeStep < steps.length) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <Container maxWidth="xl">
      <Header />
      <h1>Card Detail</h1>
      <RentedContend__wrapper>
        <Stepper_Wrapper>
          <Box>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => (
                <Step key={index}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <form>
              {activeStep === 0 && (
                <Box sx={{ mt: 2 }}>
                  <TextField
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    label="Pick-up Location"
                    fullWidth
                    variant="outlined"
                    required
                  />
                </Box>
              )}

              {activeStep === 1 && (
                <Box sx={{ mt: 2 }}>
                  <TextField
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    fullWidth
                    variant="outlined"
                    required
                  />
                </Box>
              )}

              {activeStep === 2 && (
                <Box sx={{ mt: 2 }}>
                  <TextField
                    value={dropOffLocation}
                    onChange={(e) => setDropOffLocation(e.target.value)}
                    label="Drop-off Location"
                    fullWidth
                    variant="outlined"
                    required
                  />
                </Box>
              )}

              {activeStep === 3 && (
                <Box sx={{ mt: 2 }}>
                  <TextField
                    type="date"
                    value={dropOffDate}
                    onChange={(e) => setDropOffDate(e.target.value)}
                    fullWidth
                    variant="outlined"
                    required
                  />
                </Box>
              )}
              {activeStep === 4 && (
                <RentedCar_Wrapper>
                  <Box sx={{ maxWidth: 400 }} key={card.id}>
                    <CardMedia
                      component="img"
                      height="190"
                      image={card.img}
                      alt={card.name}
                    />
                    <CardContent>
                      <Typography
                        sx={{
                          fontSize: "27px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItem: "center",
                        }}
                        variant="h1"
                      >
                        {card.name}{" "}
                        <img
                          style={{
                            width: "70px",
                          }}
                          src={card.chevrolet_Logo}
                          alt=""
                        />
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
                  <ToastContainer />
                </RentedCar_Wrapper>
              )}
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
              >
                <Button
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  variant="outlined"
                >
                  Back
                </Button>
                {activeStep === steps.length - 1 ? (
                  <Button onClick={insertCarData} variant="contained">
                    Submit
                  </Button>
                ) : (
                  <Button onClick={handleNext} variant="contained">
                    Next
                  </Button>
                )}
              </Box>
            </form>
          </Box>
        </Stepper_Wrapper>
      </RentedContend__wrapper>
    </Container>
  );
};

export default CardDetail;
