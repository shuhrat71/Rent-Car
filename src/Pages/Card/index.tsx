import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import GroupIcon from "@mui/icons-material/Group";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import GradientIcon from "@mui/icons-material/Gradient";
import GradingIcon from "@mui/icons-material/Grading";
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
        justifyContent: "center",
        gap: 10,
      }}
    >
      <Card sx={{ maxWidth: 375 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="190"
            image="https://rostov.masmotors.ru/colors/ravon-gentra/14.png"
            alt="laseti"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Gentra
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
                <SecurityIcon />: Garov so'm : 3000000 Kuniga 300 km beriladi
                unda ortiq har bir kilometr uchun : 1000
              </Typography>
              <Typography>
                <GradientIcon /> Qora
              </Typography>
              <Typography>
                <DriveEtaIcon />
                Gaz
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
      <Card sx={{ maxWidth: 375 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="190"
            image="https://avtouzbegim.uz/wp-content/uploads/2023/05/12.png"
            alt="Cobalt"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Cobalt
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
                <SecurityIcon />: Garov so'm : 3000000 Kuniga 300 km beriladi
                unda ortiq har bir kilometr uchun : 1000
              </Typography>
              <Typography>
                <GradientIcon /> Oq
              </Typography>
              <Typography>
                <DriveEtaIcon />
                Gaz
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
      <Card sx={{ maxWidth: 375 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="190"
            image="https://ruautoshop.com/auto/images/000001213975ddb2d345.png"
            alt={"nexia-3"}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Nexia-3
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
                <SecurityIcon />: Garov so'm : 3000000 Kuniga 300 km beriladi
                unda ortiq har bir kilometr uchun : 1000
              </Typography>
              <Typography>
                <GradientIcon />
                Kumushrang
              </Typography>
              <Typography>
                <DriveEtaIcon />
                Gaz
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
      <Card sx={{ maxWidth: 375 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="190"
            image="https://secure-developments.com/shared/chile/gm_forms/assets/front/images/jellys/65f46f72e48fd.png"
            alt="onix"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Onix
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
              <Typography>Kumushrang</Typography>
              <Typography>
                <SecurityIcon />: Garov so'm : 3000000 Kuniga 300 km beriladi
                unda ortiq har bir kilometr uchun : 1000
              </Typography>
              <Typography>
                <GradientIcon />
                Kumushrang
              </Typography>
              <Typography>
                <DriveEtaIcon />
                Gaz
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

      <Card sx={{ maxWidth: 375 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="190"
            image="https://storage.yandexcloud.net/cdn.carso.ru/uploads/new_car/309/colors/12.png"
            alt="nexia-3"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Nexia-3
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
                <SecurityIcon />: Garov so'm : 3000000 Kuniga 300 km beriladi
                unda ortiq har bir kilometr uchun : 1000
              </Typography>
              <Typography>
                <GradientIcon />
                Qora
              </Typography>
              <Typography>
                <DriveEtaIcon />
                Gaz
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
      <Card sx={{ maxWidth: 375 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="190"
            image="https://avtouzbegim.uz/wp-content/uploads/2023/05/13.png"
            alt="nexia-3"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Nexia-3
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
                <SecurityIcon />: Garov so'm : 3000000 Kuniga 300 km beriladi
                unda ortiq har bir kilometr uchun : 1000
              </Typography>
              <Typography>
                <GradientIcon />
                Oq
              </Typography>
              <Typography>
                <DriveEtaIcon />
                Gaz
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
      <Card sx={{ maxWidth: 375 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="190"
            image="https://spb.autoglass-russia.ru/img/auto/chevrolet-lacetti.png"
            alt="laseti"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Laseti
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
                <SecurityIcon />: Garov so'm : 3000000 Kuniga 300 km beriladi
                unda ortiq har bir kilometr uchun : 1000
              </Typography>
              <Typography>
                <GradientIcon />
                Qora
              </Typography>
              <Typography>
                <DriveEtaIcon />
                Gaz
              </Typography>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button size="small" color="primary">
            Rent
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 375 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="190"
            image="https://avtouzbegim.uz/wp-content/uploads/2023/05/11.png"
            alt="gentra"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Gentra
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
                <SecurityIcon />: Garov so'm : 3000000 Kuniga 300 km beriladi
                unda ortiq har bir kilometr uchun : 1000
              </Typography>
              <Typography>
                <GradientIcon />
                Oq
              </Typography>
              <Typography>
                <DriveEtaIcon />
                Gaz
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

      <Card sx={{ maxWidth: 375 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="190"
            image="https://storage.yandexcloud.net/cdn.carso.ru/uploads/new_car/176/colors/largecard_chevrolet_spark_2.png"
            alt="spark"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Spark
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
                <SecurityIcon />: Garov so'm : 3000000 Kuniga 300 km beriladi
                unda ortiq har bir kilometr uchun : 1000
              </Typography>
              <Typography>
                <DriveEtaIcon />
                Gaz
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
      <Card sx={{ maxWidth: 375 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="190"
            image="https://avtouzbegim.uz/wp-content/uploads/2023/05/14.png"
            alt="spark"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Spark
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
                <SecurityIcon />: Garov so'm : 3000000 Kuniga 300 km beriladi
                unda ortiq har bir kilometr uchun : 1000
              </Typography>
              <Typography>
                <GradientIcon />
                Oq
              </Typography>
              <Typography>
                <DriveEtaIcon />
                Gaz
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
      <Card sx={{ maxWidth: 375 }}>
        <CardActionArea>
          <CardMedia component="img" height="190" image={laceti} alt={laceti} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Gentra
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
              <Typography>Kumushrang</Typography>
              <Typography>
                <SecurityIcon />: Garov so'm : 3000000 Kuniga 300 km beriladi
                unda ortiq har bir kilometr uchun : 1000
              </Typography>
              <Typography>
                <DriveEtaIcon />
                Gaz
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
