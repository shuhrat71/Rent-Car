import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import GroupIcon from "@mui/icons-material/Group";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import SecurityIcon from "@mui/icons-material/Security";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import laceti from "./img/laceti.jpg";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import { Container } from "@mui/material";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import chevrolet from "./img/chevrolet.svg";
export default function MultiActionAreaCard() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    ></Container>
  );
}
