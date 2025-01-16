import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import UserList from "./Components/userList";
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import { ContainerTap } from "./Components";
import ArxivPage from "./Components/arxiv";
import CardDetailARX from "./Components/arxiv";
import { createClient } from "@supabase/supabase-js";
import CardDetail from "Pages/Rented/inxdex";
import { CarName } from "Pages/Home/Components/Selectors/select";
import { CarDetail } from "Pages/Rented";
import speedometr from "Pages/Home/Components/Selectors/img/speedometer.svg";
import gearbox from "Pages/Home/Components/Selectors/img/gearbox.svg";
import user from "Pages/Home/Components/Selectors/img/user.svg";
import gasStation from "Pages/Home/Components/Selectors/img/gasStation.svg";
import { RentBtn } from "Pages/Home/Components/Card/card";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const [getData, setData] = React.useState<any>([]);

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
    localStorage.setItem("carData", JSON.stringify(data));
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <ContainerTap>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          width: "200px",
          height: "100vh",
          padding: "80px 0 0 ",
          borderRight: 1,
          borderColor: "divider",
        }}
      >
        <Tab label="Foydalanuvchilar" {...a11yProps(0)} />
        <Tab label="Ijaraga olinganlar" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        {/* <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
        <Container>
          <UserList />
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Container>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              gap: "20px",
            }}
          >
            {getData.map((item: any) => (
              <Box
                sx={{
                  maxWidth: 700,
                  border: "1px solid black",
                  marginBottom: "70px",
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
              </Box>
            ))}
          </div>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Container>
          <CardDetailARX />
        </Container>
      </TabPanel>
    </ContainerTap>
  );
}
