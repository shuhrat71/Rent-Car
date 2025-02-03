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

import { createClient } from "@supabase/supabase-js";
import CardDetail from "Pages/Rented/inxdex";
import { CarName } from "Pages/Home/Components/Selectors/select";
import { CarDetail } from "Pages/Rented";
import speedometr from "Pages/Home/Components/Selectors/img/speedometer.svg";
import gearbox from "Pages/Home/Components/Selectors/img/gearbox.svg";
import user from "Pages/Home/Components/Selectors/img/user.svg";
import gasStation from "Pages/Home/Components/Selectors/img/gasStation.svg";
import { RentBtn } from "Pages/Home/Components/Card/card";
import AddCard from "./Components/addCar";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from "@mui/material";

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
  const [archiveList, setArchiveList] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const fetchData = async () => {
    const supabaseUrl = "https://wdybqcunwsmveabxiekf.supabase.co";
    const supabaseKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkeWJxY3Vud3NtdmVhYnhpZWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzODkyNzYsImV4cCI6MjA0ODk2NTI3Nn0.Fyo48A9AP7-VcERAFEvq2TdZF2Ug2Kr1FwDAgpnp90o";

    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data, error } = await supabase.from("car data").select("*");

    const response = await supabase
      .from("archive")
      .select('*, "Users"(*), "car data"(*), "rentedLists"(*)');

    console.log(response.data);
    if (error) {
      console.error("Error fetching data:", error);
    } else {
      setData(data || []);
    }
    localStorage.setItem("car data", JSON.stringify(data));

    const formattedData =
      response.data?.map((item: any) => ({
        archiveId: item.id,
        userName: item.Users?.name,
        carId: item["car data"]?.id,
        carName: item["car data"]?.name,
        carImage: item["car data"]?.img,
        rentedId: item.rentedLists?.id,
      })) || [];
    console.log(formattedData);

    setArchiveList(formattedData);
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
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          width: "200px",
          padding: "80px 0 0 ",
          borderRight: 1,
          borderColor: "divider",
        }}
      >
        <Tab label="Foydalanuvchilar" {...a11yProps(0)} />
        <Tab label="Ijaraga olinganlar" {...a11yProps(1)} />
        <Tab label="Mashina qo'shish" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Container>
          <UserList />
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TableContainer
          component={Paper}
          sx={{ maxWidth: 800, margin: "auto", marginTop: 5 }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Archive ID</strong>
                </TableCell>
                <TableCell>
                  <strong>User Name</strong>
                </TableCell>
                <TableCell>
                  <strong>Car ID</strong>
                </TableCell>
                <TableCell>
                  <strong>Car Name</strong>
                </TableCell>
                <TableCell>
                  <strong>Car Image</strong>
                </TableCell>
                <TableCell>
                  <strong>Rented ID</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {archiveList.map((item) => (
                <TableRow key={item.archiveId}>
                  <TableCell>{item.archiveId}</TableCell>
                  <TableCell>{item.userName}</TableCell>
                  <TableCell>{item.carId}</TableCell>
                  <TableCell>{item.carName}</TableCell>
                  <TableCell>
                    <img
                      src={item.carImage}
                      alt={item.carName}
                      width="50"
                      height="30"
                      style={{ borderRadius: "5px" }}
                    />
                  </TableCell>
                  <TableCell>{item.rentedId}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Container>
          <AddCard />
        </Container>
      </TabPanel>
    </ContainerTap>
  );
}
