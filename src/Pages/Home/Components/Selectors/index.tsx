import React, { useState, useMemo } from "react";
import { Typography, Box } from "@mui/material";
import {
  Select,
  MenuItem,
  Container,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
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
import { useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import { CarDetail, RentBtn } from "../Card/card";
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
    id: 17,
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

const Filter: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [productData, setProductData] = useState(database);
  const [selectedPrice, setSelectedPrice] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedPetrol, setSelectedPetrol] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const categories = useMemo(
    () => [...Array.from(new Set(database.map((product) => product.category)))],
    []
  );

  const colors = useMemo(
    () => [...Array.from(new Set(database.map((product) => product.color)))],
    []
  );

  const price = useMemo(
    () => [...Array.from(new Set(database.map((product) => product.price)))],
    []
  );
  const petrol = useMemo(
    () => [...Array.from(new Set(database.map((product) => product.petrol)))],
    []
  );

  const handleSearch = (
    value: string,
    type: "carName" | "category" | "color" | "price" | "petrol"
  ) => {
    console.log(value);
    if (value) {
      const searchResult = database.filter((data) => {
        console.log("data type:", data[type]);
        return data[type]?.toLowerCase().includes(value.toLowerCase());
      });
      setProductData(searchResult);
    } else {
      setProductData(database);
    }
  };
  const navigate = useNavigate();

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
      <Selectors__wrapper>
        <Input_wrapper>
          <input
            type="text"
            value={search}
            placeholder="Qidiruv..."
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const value = event.target.value;
              handleSearch(value, "carName");
              setSearch(value);
            }}
          />
        </Input_wrapper>

        <FormControl fullWidth>
          <InputLabel
            id="select-category"
            sx={{
              color: "black",
            }}
          >
            Uzatma turi
          </InputLabel>
          <Select
            label="Uzatma turi"
            value={selectedCategory}
            labelId="select-category"
            onChange={(event: SelectChangeEvent) => {
              const value = event.target.value;
              handleSearch(value, "category");
              setSelectedCategory(value);
            }}
          >
            {categories.map((category) => (
              <MenuItem value={category} key={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="select-color">Color</InputLabel>
          <Select
            label="Color"
            value={selectedColor}
            labelId="select-color"
            onChange={(event: SelectChangeEvent) => {
              const value = event.target.value;
              handleSearch(event.target.value, "color");
              setSelectedColor(value);
            }}
          >
            {colors.map((color) => (
              <MenuItem value={color} key={color}>
                {color}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="select-price">Price</InputLabel>
          <Select
            label="Price"
            value={selectedPrice}
            labelId="select-price"
            onChange={(event: SelectChangeEvent) => {
              const value = event.target.value;
              handleSearch(event.target.value, "price");
              setSelectedPrice(value);
            }}
          >
            {price.map((value) => (
              <MenuItem value={value} key={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="select-petrol">Petrol</InputLabel>
          <Select
            label="Petrol"
            value={selectedPetrol}
            labelId="select-petrol"
            onChange={(event: SelectChangeEvent) => {
              const value = event.target.value;
              handleSearch(event.target.value, "petrol");
              setSelectedPetrol(value);
            }}
          >
            {petrol.map((value) => (
              <MenuItem value={value} key={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Selectors__wrapper>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {productData.length > 0 ? (
          productData.map((product) => (
            <Box
              sx={{
                maxWidth: 400,
                borderRadius: "10px",
                transition: "0.3s",
                "&:hover": {
                  boxShadow: 3,
                  transform: "scale(1.1)",
                },
              }}
              key={product.id}
            >
              <CardMedia
                component="img"
                height="190"
                image={product.url}
                alt={product.url}
              />
              <CardContent>
                <CarName>
                  <Typography variant="h1">{product.carName}</Typography>
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
              <RentBtn>
                <CardActions>
                  <Button
                    key={product.id}
                    onClick={() => handleCardClick(product.id)}
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
          <p>hech narsa topilmadi</p>
        )}
      </div>
    </Container>
  );
};

export default Filter;
export { database };
