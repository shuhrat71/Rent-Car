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
    >
      <Card sx={{ maxWidth: 375 }}>
        <CardActionArea>
          <CardMedia component="img" height="190" image={laceti} alt={laceti} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Chevrolet Gentra
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                display: "flex",
                alignContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography>
                <GroupIcon />: O'rindiqlar soni : 5
              </Typography>
              <Typography>
                {" "}
                <LocalGasStationIcon /> : Metan
              </Typography>
              <Typography>
                <SecurityIcon />: Garov so'm : 3000000 Kuniga 300 km beriladi
                unda ortiq har bir kilometr uchun : 1000
              </Typography>
              <Typography>
                <DriveEtaIcon />
                Benzin
              </Typography>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button size="small" color="primary">
            Rent
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
