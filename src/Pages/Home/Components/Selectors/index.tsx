import React, { useState, useEffect } from "react";
import AOS from "aos";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import { CarDetail, RentBtn } from "../Card/card";
import NotFound from "../../../../components/NotFound";
import { CarName } from "./select";
import speedometr from "./img/speedometer.svg";
import gearbox from "./img/gearbox.svg";
import { Container } from "@mui/material";
import gasStation from "./img/gasStation.svg";
import user from "./img/user.svg";

import { Typography, Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

interface Cars {
  id: any;
  name: string;
  img: string;
  number: number;
  textcar: string;
  chevrolet_Logo: string;
  isAvailable: boolean;
}

const Filter: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [getData, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [ids, setIds] = useState<any>([]);

  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 50,
      duration: 1500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

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
    localStorage.setItem("car data", JSON.stringify(data));

    const res = await supabase.from("rentedLists").select("carId");
    setIds(res.data);
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
      navigate("/notFound");
    }
  };

  return (
    <Container maxWidth="xl">
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
                border: "1px solid black",
                marginBottom: "50px",
                borderRadius: "10px",
                transition: "0.3s",
                borderImageSlice: 1,

                "&:hover": {
                  boxShadow: 3,
                  transform: "scale(1.1)",
                },
              }}
              key={item.id}
            >
              <CardMedia
                component="img"
                height="200"
                image={item.img}
                alt={item.url}
                sx={{
                  borderRadius: "10px",
                  width: "100%",
                }}
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
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
                    disabled={ids.includes(item.id)}
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
