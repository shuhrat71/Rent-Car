import { Container, Box } from "@mui/material";
import { CarDetail, RentBtn } from "../Card/card";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import speedometr from "./img/speedometer.svg";
import gearbox from "./img/gearbox.svg";
import user from "./img/user.svg";
import gasStation from "./img/gasStation.svg";

interface Product {
  id: number;
  carName: string;
  price: string;
  color: string;
  petrol: string;
  category: string;
  url: string;
  speedometr: string;
  place: number;
}

const database: Product[] = [
  {
    id: 1,
    category: "Mexanik",
    url: "https://rostov.masmotors.ru/colors/ravon-gentra/14.png",
    carName: "Gentra",
    price: "3000000",
    color: "Qora",
    petrol: "Gaz",
    speedometr: "3000km",
    place: 5,
  },
  {
    id: 2,
    category: "Mexanik",
    url: "https://avtouzbegim.uz/wp-content/uploads/2023/05/12.png",
    carName: "Cobalt 1.5 ",
    price: "3000000",
    color: "Oq",
    petrol: "Benzin",
    speedometr: "3000km",
    place: 5,
  },
  {
    id: 3,
    category: "Avtomat",
    url: "https://secure-developments.com/shared/chile/gm_forms/assets/front/images/jellys/65f46f72e48fd.png",
    carName: "Onix (1.2 Turbo)",
    price: "3000000",
    color: "Kumushrang",
    petrol: "Gaz",
    speedometr: "3000km",
    place: 5,
  },
  {
    id: 17,
    category: "Avtomat",
    url: "https://automotive-api.s3.us-east-2.amazonaws.com/5f8b12166d5cc500171c6718/e561c15d-5668-4167-89cd-1d3461a78a4b/onix.png",
    carName: "Onix",
    price: "3000000",
    color: "Kulrang",
    petrol: "Gaz",
    speedometr: "3000km",
    place: 5,
  },
  {
    id: 4,
    category: "Avtomat",
    url: "https://ruautoshop.com/auto/images/000001213975ddb2d345.png",
    carName: "Nexia-3 1.5 ",
    price: "3000000",
    color: "Kulrang",
    petrol: "Gaz",
    speedometr: "3000km",
    place: 5,
  },
  {
    id: 5,
    category: "Avtomat",
    url: "https://avtouzbegim.uz/wp-content/uploads/2023/05/13.png",
    carName: "Nexia-3 1.5 ",
    price: "3000000",
    color: "Oq",
    petrol: "Gaz",
    speedometr: "3000km",
    place: 5,
  },
  {
    id: 6,
    category: "Avtomat",
    url: "https://storage.yandexcloud.net/cdn.carso.ru/uploads/new_car/309/colors/12.png",
    carName: "Nexia-3 1.5 ",
    price: "3000000",
    color: "Qora",
    petrol: "Gaz",
    speedometr: "3000km",
    place: 5,
  },
  {
    id: 7,
    category: "Mexanik",
    url: "https://avtouzbegim.uz/wp-content/uploads/2023/05/11.png",
    carName: "Gentra",
    price: "3000000",
    color: "Oq",
    petrol: "Benzin",
    speedometr: "3000km",
    place: 5,
  },
  {
    id: 8,
    category: "Mexanik",
    url: "https://spb.autoglass-russia.ru/img/auto/chevrolet-lacetti.png",
    carName: "Laseti",
    price: "3000000",
    color: "Qora",
    petrol: "Gaz",
    speedometr: "3000km",
    place: 5,
  },
  {
    id: 9,
    category: "Mexanik",
    url: "https://avtouzbegim.uz/wp-content/uploads/2023/05/14.png",
    carName: "Spark ",
    price: "3000000",
    color: "Oq",
    petrol: "Gaz",
    speedometr: "3000km",
    place: 5,
  },
  {
    id: 10,
    category: "Mexanik",
    url: "https://storage.yandexcloud.net/cdn.carso.ru/uploads/new_car/176/colors/largecard_chevrolet_spark_2.png",
    carName: "Spark",
    price: "3000000",
    color: "Qora",
    petrol: "Gaz",
    speedometr: "3000km",
    place: 5,
  },
  {
    id: 11,
    category: "Mexanik",
    url: "https://134706.selcdn.ru/v1/SEL_39171/site-production-public/system/image/file/9312394/vehicle_slider_1%402x.jpg",
    carName: "Nexia 2",
    price: "3000000",
    color: "Oq",
    petrol: "Gaz",
    speedometr: "3000km",
    place: 5,
  },
  {
    id: 12,
    category: "Mexanik",
    url: "https://m-at.ru/upload/iblock/535/8yagk0setg4yn3ws9w3z28qgc18tups2/nexia_kletn_2_daewoo_sedan.jpg",
    carName: "Nexia 2",
    price: "3000000",
    color: "Kulrang",
    petrol: "Gaz",
    speedometr: "3000km",
    place: 5,
  },
  {
    id: 13,
    category: "Avtomat",
    url: "https://asacar.uz/uploads/car_color/KK/KK/KE/1632743563.png",
    carName: "Malibu 2",
    price: "6000000",
    color: "Qora",
    petrol: "Benzin",
    speedometr: "3000km",
    place: 5,
  },
  {
    id: 14,
    category: "Avtomat",
    url: "https://avtouzbegim.uz/wp-content/uploads/2023/05/5.png",
    carName: "Malibu 2",
    price: "6000000",
    color: "Oq",
    petrol: "Benzin",
    speedometr: "3000km",
    place: 5,
  },
  {
    id: 15,
    category: "Avtomat",
    url: "https://storage.yandexcloud.net/cdn.carso.ru/uploads/new_car/169/colors/image_507.png",
    carName: "Captiva 4 ",
    price: "6000000",
    color: "Oq",
    petrol: "Benzin",
    speedometr: "3000km",
    place: 6,
  },
  {
    id: 16,
    category: "Avtomat",
    url: "https://www.budgetavto.uz/media/sitecars/Captiva_3.png",
    carName: "Captiva 4",
    price: "6000000",
    color: "Qora",
    petrol: "Benzin",
    speedometr: "3000km",
    place: 6,
  },

  {
    id: 19,
    category: "Mexanik",
    url: "https://lionmotors.uz/wp-content/uploads/2020/11/damaswhite.jpg",
    carName: "Damas",
    price: "3000000",
    color: "Oq",
    petrol: "Gaz",
    speedometr: "3000km",
    place: 8,
  },
];

export default function MultiActionAreaCard() {
  return (
    <Container maxWidth="xl">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {database.length > 0 ? (
          database.map((product) => (
            <Card sx={{ maxWidth: 400 }} key={product.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="190"
                  image={product.url}
                  alt={product.url}
                />
                <CardContent>
                  <Typography>{product.carName}</Typography>
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
                        <p>{product.speedometr}</p>
                      </div>
                      <div className="gearbox box">
                        <img src={gearbox} alt="" />
                        <p>{product.category}</p>
                      </div>
                      <div className="person box">
                        <img src={user} alt="" />
                        <p>{product.place}</p>
                      </div>
                      <div className="petrol box">
                        <img src={gasStation} alt="" />
                        <p>{product.petrol}</p>
                      </div>
                    </CarDetail>
                  </Box>
                </CardContent>
              </CardActionArea>
              <RentBtn>
                <CardActions>
                  <Button size="small" color="primary">
                    Ijaraga Olish
                  </Button>
                </CardActions>
              </RentBtn>
            </Card>
          ))
        ) : (
          <p>hech narsa topilmadi</p>
        )}
      </div>
    </Container>
  );
}
