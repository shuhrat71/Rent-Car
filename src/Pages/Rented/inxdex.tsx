import React, { useEffect, useState } from "react";
import { ROUTE_PATHS } from "routes/paths";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { createClient } from "@supabase/supabase-js";
import { Button, Stepper, Step, StepLabel, TextField } from "@mui/material";
import { Typography, Box, Container } from "@mui/material";
import { CarDetail } from "../Home/Components/Card/card";
import { RentedCar_Wrapper, RentedContend__wrapper, Stepper_Wrapper } from ".";
import CircularProgress from "@mui/material/CircularProgress";
import Header from "../Header";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import speedometr from "../Home/Components/Selectors/img/speedometer.svg";
import gearbox from "../Home/Components/Selectors/img/gearbox.svg";
import user from "../Home/Components/Selectors/img/user.svg";
import TelegramIcon from "@mui/icons-material/Telegram";
import gasStation from "../Home/Components/Selectors/img/gasStation.svg";
import NoCrashIcon from "@mui/icons-material/NoCrash";
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
  const [isExpired] = useState(false);
  const [otpInput, setOtpInput] = useState<string>("");
  const [generatedOtp, setGeneratedOtp] = useState<string>("");
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
      setGeneratedOtp(newOtp);

      await sendOtpMessage(newOtp, card);

      toast.success("Tasdiqlash kodi Telegram botga yuborildi!");
    } catch (error) {
      console.error("Error submitting rent data:", error);
    }
  };

  const verifyOtp = async () => {
    try {
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

      await supabase.from("archive").insert([
        {
          userId: id,
          rentedId: data?.[0]?.id,
          carId: id,
        },
      ]);

      toast.success("Ijara muvaffaqiyatli rasmiylashtirildi!");

      return data?.[0];
    } catch (error) {
      console.error("Error submitting rent data:", error);
      return null;
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

  const sendOtpMessage = async (code: string, carData: any) => {
    const BOT_TOKEN = "8198171947:AAE5LeyTu0v9KYGFlJaG6drUV0RpyeGCfsI";
    const CHAT_ID = "6287309235";

    if (!carData) {
      toast.error("Buyurtma ma’lumotlari topilmadi.");
      return;
    }

    const { name, gearbox, textcar, img } = carData;

    const message = `
🚗 *Yangi Buyurtma* 🚗
✅ *Tasdiqlash kodi:* *${code}*
🚗 *Buyurtma qilingan mashina ${img}*
📌 *Mashina:* ${name}
🎨 *Uzatmalar qutisi:* ${gearbox}
💰 *Narxi:* ${textcar} so‘m
📅 *Pickup:* ${pickUpDate} - ${pickupLocation}
📅 *Dropoff:* ${dropOffDate} - ${dropOffLocation}

Tasdiqlash kodini kiriting va buyurtmani yakunlang!`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    console.log("Telegram API-ga so‘rov yuborilmoqda...");

    try {
      const response = await axios.post(url, {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      });

      console.log("Bot javobi:", response.data);
      toast.success("Tasdiqlash kodi va mashina ma'lumotlari yuborildi!");

      // 100 soniyadan so‘ng eslatma chiqarish
      setTimeout(() => {
        toast.error("Vaqt tugadi, qayta kod olish uchun bosing.");
      }, 100000);
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      toast.error(
        "Xatolik yuz berdi, iltimos, tekshirib qayta urinib ko‘ring."
      );
    }
  };

  const handleConfirmOtp = async () => {
    console.log(otpInput, generatedOtp);

    if (otpInput === generatedOtp) {
      toast.success(
        "Tasdiqlash kodi to‘g‘ri! Ijara muvaffaqiyatli rasmiylashtirildi!"
      );
      await verifyOtp();
      navigate(ROUTE_PATHS.HOME);
    } else {
      toast.error("Noto‘g‘ri tasdiqlash kodi! Qaytadan urinib ko‘ring.");
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
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "30px",
                  gap: "20px",
                }}
              >
                <TextField
                  value={otpInput}
                  onChange={(e) => setOtpInput(e.target.value)}
                  placeholder="Tasdiqlash kodini kiriting"
                />

                <Button
                  onClick={handleConfirmOtp}
                  disabled={isExpired}
                  variant="contained"
                  sx={{
                    padding: "15px 0",
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    fontSize: "16px",
                  }}
                >
                  <NoCrashIcon /> Tasdiqlash
                </Button>
              </Box>
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
                <Button
                  onClick={insertCarData}
                  variant="contained"
                  sx={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "space-between",
                    padding: "15px 20px",
                  }}
                >
                  <TelegramIcon /> Kodni yuborish
                </Button>
              ) : (
                <Button onClick={handleNext} variant="contained">
                  Next
                </Button>
              )}
            </Box>
          </Box>
        </Stepper_Wrapper>
      </RentedContend__wrapper>
    </Container>
  );
};

export default CardDetail;
