import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography, Box } from "@mui/material";
import { Container } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import {
  CarName,
  Input_wrapper,
  Selectors__wrapper,
  SetDataWrapper,
  Wrapper,
  InputGroup,
  Label,
  InputWrapper,
  Icon,
  Input,
  ButtonElment,
  Location_Btn,
} from "./select";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import { CarDetail, RentBtn } from "../Card/card";
import speedometr from "./img/speedometer.svg";
import gearbox from "./img/gearbox.svg";
import user from "./img/user.svg";
import gasStation from "./img/gasStation.svg";
import { createClient } from "@supabase/supabase-js";
import NotFound from "../../../../components/NotFound";
import { keyframes } from "@mui/system";

interface Cars {
  id: any;
  name: string;
  img: string;
  number: number;
  textcar: string;
  chevrolet_Logo: string;
}

const borderAnimation = keyframes`
  from {
    border-image-source: linear-gradient(0deg, #ff2000, #00ff00, #0000ff, #ff0000);
  }
  to {
    border-image-source: linear-gradient(360deg, #ff0000, #00ff00, #0000ff, #ff0000);
  }
`;

const Filter: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [getData, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    const supabaseUrl = "https://wdybqcunwsmveabxiekf.supabase.co";
    const supabaseKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkeWJxY3Vud3NtdmVhYnhpZWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzODkyNzYsImV4cCI6MjA0ODk2NTI3Nn0.Fyo48A9AP7-VcERAFEvq2TdZF2Ug2Kr1FwDAgpnp90o";

    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data, error } = await supabase.from("car data").select("*");
    console.log(data);
    if (error) {
      console.error("Error fetching data:", error);
    } else {
      setData(data || []);
    }
    setLoading(false);
    localStorage.setItem("carData", JSON.stringify(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  const navigate = useNavigate();

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

  const handleSearch = (value: string, type: string) => {
    if (value) {
      const searchResult = getData.filter((item: any) => {
        console.log("item type:", item[type]);
        return item[type]?.toLowerCase().includes(value.toLowerCase());
      });
      setData(searchResult);
      localStorage.setItem("searchData", JSON.stringify(searchResult));
    } else {
      setData([]);
    }
  };

  const handleCardClick = (id: number) => {
    if (id) {
      navigate(`/card/${id}`);
    } else {
      navigate("notFound");
    }
  };

  return (
    <Container maxWidth="xl">
      <SetDataWrapper>
        <Wrapper>
          <InputGroup>
            <Label>Pick-up Location</Label>
            <Location_Btn>
              <Button variant="contained">
                <Icon>
                  <LocationOnIcon />
                </Icon>
                <a href="https://www.google.com/maps/place/Greenleaf+ofis./@40.1545604,67.823834,415m/data=!3m1!1e3!4m6!3m5!1s0x38b297002b54a42b:0xfcceac67ff6d24b2!8m2!3d40.1551728!4d67.8237147!16s%2Fg%2F11w9jk2syt?entry=ttu&g_ep=EgoyMDI0MTIwMi4wIKXMDSoASAFQAw%3D%3D">
                  Got to Location
                </a>
              </Button>
            </Location_Btn>
          </InputGroup>

          <InputGroup>
            <Label>Pick-up date</Label>
            <InputWrapper>
              <Icon>
                <CalendarMonthIcon />
              </Icon>
              <Input type="date" defaultValue="2023-12-12" />
            </InputWrapper>
          </InputGroup>

          <InputGroup>
            <Label>Drop-off Location</Label>
            <InputWrapper>
              <Icon>
                <LocationOnIcon />
              </Icon>
              <Input type="text" placeholder="Search a location" />
            </InputWrapper>
          </InputGroup>

          <InputGroup>
            <Label>Drop-off date</Label>
            <InputWrapper>
              <Icon>
                <CalendarMonthIcon />
              </Icon>
              <Input type="date" defaultValue="2023-12-12" />
            </InputWrapper>
          </InputGroup>

          <ButtonElment>Find a Vehicle →</ButtonElment>
        </Wrapper>
      </SetDataWrapper>
      <h1
        style={{
          fontSize: "35px",
          color: "white",
        }}
      >
        Mahsulot Filtri
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          gap: "20px",
        }}
      >
        {getData.length > 0 ? (
          getData.map((item: any) => (
            <Box
              sx={{
                maxWidth: 700,
                border: "4px solid black",
                marginBottom: "70px",
                borderRadius: "10px",
                transition: "0.3s",
                borderImageSlice: 1,
                borderImageSource:
                  "linear-gradient(45deg, #ff0000, #00ff00, #0000ff, #ff0000)",
                animation: `${borderAnimation} 1s infinite`,
                "&:hover": {
                  boxShadow: 3,
                  transform: "scale(1.1)",
                },
              }}
              key={item.id}
            >
              <CardMedia
                component="img"
                height="190"
                image={item.img}
                alt={item.url}
                sx={{
                  borderRadius: "10px",
                  width: "100%",
                }}
              />
              <CardContent>
                <CarName>
                  <Typography variant="h1">{item.name}</Typography>
                  <img src={item.chevrolet_Logo} alt="" />
                </CarName>
                <Box
                  sx={{
                    width: "375px",
                    height: "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#F6F6F6",
                    borderRadius: "16px",
                  }}
                >
                  <CarDetail>
                    <div className="speedometr box">
                      <img src={speedometr} alt="" />
                      <p>{item.tachometer}</p>
                    </div>
                    <div className="gearbox box">
                      <img src={gearbox} alt="" />
                      <p>{item.gearbox}</p>
                    </div>
                    <div className="person box">
                      <img src={user} alt="" />
                      <p>{item.number}</p>
                    </div>
                    <div className="petrol box">
                      <img src={gasStation} alt="" />
                      <p>{item.textcar}</p>
                    </div>
                  </CarDetail>
                </Box>
              </CardContent>
              <RentBtn>
                <CardActions>
                  <Button
                    key={item.id}
                    onClick={() => handleCardClick(item.id)}
                    size="small"
                    color="primary"
                  >
                    Ijaraga Olish
                  </Button>
                </CardActions>
              </RentBtn>
            </Box>
          ))
        ) : (
          <NotFound />
        )}
      </div>
    </Container>
  );
};

export default Filter;
