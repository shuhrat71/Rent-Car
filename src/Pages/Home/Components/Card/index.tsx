import { useState, useMemo, useEffect } from "react";
import { Container, Box } from "@mui/material";
import { CarDetail, RentBtn } from "../Card/card";
import { createClient } from "@supabase/supabase-js";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import CardContent from "@mui/material/CardContent";
import speedometr from "./img/speedometer.svg";
import gearbox from "./img/gearbox.svg";
import user from "./img/user.svg";
import gasStation from "./img/gasStation.svg";

interface Product {
  id: any;
  name: string;
  img: string;
  number: number;
  textcar: string;
  tachometer: string;
  gearbox: string;
  chevrolet_Logo: string;
}

export default function MultiActionAreaCard() {
  const [getData, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const supabaseUrl = "https://wdybqcunwsmveabxiekf.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkeWJxY3Vud3NtdmVhYnhpZWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzODkyNzYsImV4cCI6MjA0ODk2NTI3Nn0.Fyo48A9AP7-VcERAFEvq2TdZF2Ug2Kr1FwDAgpnp90o";
  const supabase = createClient(supabaseUrl, supabaseKey);

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
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("car data").select("*");
      console.log(data);
      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setData(data || []);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  if (loading) {
    return CircularIndeterminate();
  }

  return (
    <Container maxWidth="xl">
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {getData.length > 0
          ? getData.map((item: any) => (
              <Box
                sx={{
                  maxWidth: 400,
                  border: "1px solid red",
                }}
                key={item.id}
              >
                <CardMedia component="img" image={item.img} alt={item.img} />
                <CardContent>
                  <Typography>
                    {item.name} <img src={item.chevrolet_Logo} alt="" />
                  </Typography>
                  <Box
                    sx={{
                      maxWidth: "375px",
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
              </Box>
            ))
          : CircularIndeterminate()}
      </div>
    </Container>
  );
}
