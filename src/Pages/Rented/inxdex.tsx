import { useParams, useNavigate } from "react-router-dom";
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
import "react-toastify/dist/ReactToastify.css";
import { ROUTE_PATHS } from "routes/paths";
import axios from "axios";
interface Cars {
  id: number;
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
  const [pickUpDate, setPickupDate] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otp, setOtp] = useState("");
  const [isExpired, setIsExpired] = useState(false);

  const navigate = useNavigate();
  const steps = ["Pick-up Location", "Pick-up Date"];

  const supabaseUrl = "https://wdybqcunwsmveabxiekf.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkeWJxY3Vud3NtdmVhYnhpZWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzODkyNzYsImV4cCI6MjA0ODk2NTI3Nn0.Fyo48A9AP7-VcERAFEvq2TdZF2Ug2Kr1FwDAgpnp90o";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const generateOtp = () => {
    return Math.floor(10000 + Math.random() * 90000).toString();
  };

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
        }, 1000);
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
      const newOtp = generateOtp();
      setGeneratedOtp(newOtp); // Kodni saqlash
      sendOtpMessage(newOtp); // Botga yuborish

      toast.success("Tasdiqlash kodi Telegram botga yuborildi!");
    } catch (error) {
      console.error("Error submitting rent data:", error);
    }
  };

  // Foydalanuvchi kodni kiritib tasdiqlaydi
  const verifyOtp = async () => {
    if (otp === generatedOtp) {
      try {
        // Ma'lumotni bazaga kiritish
        const { data, error } = await supabase
          .from("rentedlists")
          .insert([
            {
              carId: id,
              pickUpDate,
              dropOffDate,
              pickup_location: pickupLocation,
              drop_off_location: dropOffLocation,
            },
          ])
          .select("*");

        if (error) throw error;

        // Archive-ga yozish
        await supabase.from("archive").insert([
          {
            userId: id,
            rentedId: data?.[0]?.id,
            carId: id,
          },
        ]);

        toast.success("Ijara muvaffaqiyatli rasmiylashtirildi!");
        navigate(ROUTE_PATHS.HOME);
      } catch (error) {
        console.error("Error submitting rent data:", error);
      }
    } else {
      toast.error("Noto‘g‘ri tasdiqlash kodi! Qaytadan urinib ko‘ring.");
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
  const sendMessage = async (message: string) => {
    const botToken = "8198171947:AAE5LeyTu0v9KYGFlJaG6drUV0RpyeGCfsI";
    const chatId = "6287309235"; // Foydalanuvchining chat ID si
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    try {
      await axios.post(url, {
        chat_id: chatId,
        text: message,
      });
      console.log("Xabar yuborildi!");
    } catch (error) {
      console.error("Xatolik:", error);
    }
  };

  if (!id || isNaN(Number(id))) {
    return <p>Error: Invalid or missing ID</p>;
  }
  if (!card) {
    return <p>Loading...</p>;
  }
  const handleNext = () => {
    if (!pickupLocation || !pickUpDate || !dropOffLocation || !dropOffDate) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }
    setActiveStep(1);
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  const sendOtpMessage = async (code: string) => {
    const botToken = "8198171947:AAE5LeyTu0v9KYGFlJaG6drUV0RpyeGCfsI";
    const chatId = "6287309235";
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    try {
      await axios.post(url, {
        chat_id: chatId,
        text: `Tasdiqlash kodi: ${code}`,
      });
      console.log(code);

      toast.success("Tasdiqlash kodi yuborildi!");
    } catch (error) {
      console.error("Xatolik:", error);
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
                  <Box sx={{ mt: 2 }}>
                    <TextField
                      type="datetime-local"
                      value={pickUpDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      fullWidth
                      variant="outlined"
                      required
                    />
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <TextField
                      type="datetime-local"
                      value={dropOffDate}
                      onChange={(e) => setDropOffDate(e.target.value)}
                      fullWidth
                      variant="outlined"
                      required
                    />
                  </Box>

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
                </Box>
              )}

              {activeStep === 1 && (
                <div>
                  <TextField
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Tasdiqlash kodini kiriting"
                  />

                  <button onClick={verifyOtp} disabled={isExpired}>
                    Tasdiqlash
                  </button>
                </div>
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
                {activeStep === 1 ? (
                  <Button onClick={insertCarData} variant="contained">
                    Rasmiylashtirish
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
