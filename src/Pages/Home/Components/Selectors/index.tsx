import React, { useState, useMemo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import GroupIcon from "@mui/icons-material/Group";
import SecurityIcon from "@mui/icons-material/Security";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import laceti from "./img/laceti.jpg";
import GradientIcon from "@mui/icons-material/Gradient";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import { Container } from "@mui/material";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import CardComm from "../Card";
import { Selectors__wrapper } from "./select";
interface Product {
  id: number;
  carName: string;
  price: string;
  color: string;
  petrol: string;
  category: string;
  url: string;
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
  },
  {
    id: 2,
    category: "Mexanik",
    url: "https://avtouzbegim.uz/wp-content/uploads/2023/05/12.png",
    carName: "Cobalt 1.5 ",
    price: "3000000",
    color: "Oq",
    petrol: "Benzin",
  },
  {
    id: 3,
    category: "Avtomat",
    url: "https://secure-developments.com/shared/chile/gm_forms/assets/front/images/jellys/65f46f72e48fd.png",
    carName: "Onix (1.2 Turbo)",
    price: "3000000",
    color: "Kumushrang",
    petrol: "Gaz",
  },
  {
    id: 4,
    category: "Avtomat",
    url: "https://ruautoshop.com/auto/images/000001213975ddb2d345.png",
    carName: "Nexia-3 1.5 ",
    price: "3000000",
    color: "Kulrang",
    petrol: "Gaz",
  },
  {
    id: 5,
    category: "Avtomat",
    url: "https://avtouzbegim.uz/wp-content/uploads/2023/05/13.png",
    carName: "Nexia-3 1.5 ",
    price: "3000000",
    color: "Oq",
    petrol: "Gaz",
  },
  {
    id: 6,
    category: "Avtomat",
    url: "https://storage.yandexcloud.net/cdn.carso.ru/uploads/new_car/309/colors/12.png",
    carName: "Nexia-3 1.5 ",
    price: "3000000",
    color: "Qora",
    petrol: "Gaz",
  },
  {
    id: 7,
    category: "Mexanik",
    url: "https://avtouzbegim.uz/wp-content/uploads/2023/05/11.png",
    carName: "Gentra 1.5 AT",
    price: "3000000",
    color: "Oq",
    petrol: "Benzin",
  },
  {
    id: 8,
    category: "Mexanik",
    url: "https://spb.autoglass-russia.ru/img/auto/chevrolet-lacetti.png",
    carName: "Laseti",
    price: "3000000",
    color: "Qora",
    petrol: "Gaz",
  },
  {
    id: 9,
    category: "Mexanik",
    url: "https://avtouzbegim.uz/wp-content/uploads/2023/05/14.png",
    carName: "Spark 1.25",
    price: "3000000",
    color: "Oq",
    petrol: "Gaz",
  },
  {
    id: 10,
    category: "Mexanik",
    url: "https://storage.yandexcloud.net/cdn.carso.ru/uploads/new_car/176/colors/largecard_chevrolet_spark_2.png",
    carName: "Spark",
    price: "3000000",
    color: "Qora",
    petrol: "Gaz",
  },
  {
    id: 11,
    category: "Mexanik",
    url: "https://134706.selcdn.ru/v1/SEL_39171/site-production-public/system/image/file/9312394/vehicle_slider_1%402x.jpg",
    carName: "Nexia 2",
    price: "3000000",
    color: "Oq",
    petrol: "Gaz",
  },
  {
    id: 12,
    category: "Mexanik",
    url: "https://m-at.ru/upload/iblock/535/8yagk0setg4yn3ws9w3z28qgc18tups2/nexia_kletn_2_daewoo_sedan.jpg",
    carName: "Nexia 2",
    price: "3000000",
    color: "Kulrang",
    petrol: "Gaz",
  },
  {
    id: 13,
    category: "Avtomat",
    url: "https://e7.pngegg.com/pngimages/624/67/png-clipart-2017-chevrolet-malibu-car-2016-chevrolet-malibu-general-motors-chevrolet-compact-car-sedan-thumbnail.png",
    carName: "Malibu 2",
    price: "6000000",
    color: "Qora",
    petrol: "Benzin",
  },
  {
    id: 14,
    category: "Avtomat",
    url: "https://avtouzbegim.uz/wp-content/uploads/2023/05/5.png",
    carName: "Malibu 2",
    price: "6000000",
    color: "Oq",
    petrol: "Benzin",
  },
  {
    id: 15,
    category: "Avtomat",
    url: "https://storage.yandexcloud.net/cdn.carso.ru/uploads/new_car/169/colors/image_507.png",
    carName: "Captiva 4 2.4 ",
    price: "6000000",
    color: "Oq",
    petrol: "Benzin",
  },
  {
    id: 16,
    category: "Avtomat",
    url: "https://www.budgetavto.uz/media/sitecars/Captiva_3.png",
    carName: "Captiva 4 2.4 ",
    price: "6000000",
    color: "Qora",
    petrol: "Benzin",
  },
  {
    id: 17,
    category: "Avtomat",
    url: "https://avtouzbegim.uz/wp-content/uploads/2024/01/6.png",
    carName: "Onix",
    price: "3000000",
    color: "Kumushrang",
    petrol: "Gaz",
  },
  {
    id: 19,
    category: "Mexanik",
    url: "https://lionmotors.uz/wp-content/uploads/2020/11/damaswhite.jpg",
    carName: "Damas",
    price: "3000000",
    color: "Oq",
    petrol: "Gaz",
  },
];

const Filter: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPrice, setSelectedPrice] = useState<string>("all");
  const [selectedColor, setSelectedColor] = useState<string>("all");
  const [selectedPetrol, setSelectedPetrol] = useState<string>("all");

  // Unikal qiymatlarni olish uchun yordamchi funksiyalar
  const categories = useMemo(
    () => [
      "Uzatma turi",
      ...Array.from(new Set(database.map((product) => product.category))),
    ],
    []
  );

  const colors = useMemo(
    () => [
      "Rang",
      ...Array.from(new Set(database.map((product) => product.color))),
    ],
    []
  );

  const price = useMemo(
    () => [
      "Narx",
      ...Array.from(new Set(database.map((product) => product.price))),
    ],
    []
  );
  const petrol = useMemo(
    () => [
      "Yoqilg'i turi",
      ...Array.from(new Set(database.map((product) => product.petrol))),
    ],
    []
  );
  const filteredData = useMemo(() => {
    return database.filter((product) => {
      const matchesSearch = product.carName
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === "" || product.category === selectedCategory;
      const matchesColor =
        selectedColor === "" || product.color === selectedColor;
      const matchesPrice =
        selectedPrice === "" || product.price === selectedPrice;
      const matchesPetrol =
        selectedPetrol === "" || product.petrol === selectedPetrol;
      return (
        matchesSearch &&
        matchesCategory &&
        matchesColor &&
        matchesPrice &&
        matchesPetrol
      );
    });
  }, [search, selectedCategory, selectedColor, selectedPetrol, selectedPetrol]);

  return (
    <Container maxWidth="xl">
      <h1>Mahsulot Filtri</h1>
      <Selectors__wrapper>
        <input
          type="text"
          placeholder="Qidiruv..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => setSelectedColor(e.target.value)}
          value={selectedColor}
        >
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => setSelectedPrice(e.target.value)}
          value={selectedPrice}
        >
          {price.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => setSelectedPetrol(e.target.value)}
          value={selectedPetrol}
        >
          {petrol.map((petrol) => (
            <option key={petrol} value={petrol}>
              {petrol}
            </option>
          ))}
        </select>
      </Selectors__wrapper>

      <div>
        {filteredData.length > 0 ? (
          filteredData.map((product) => (
            <Card sx={{ maxWidth: 375 }} key={product.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="190"
                  image={product.url}
                  alt={laceti}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.carName}
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
                      <GradientIcon /> {product.color}
                    </Typography>
                    <Typography>
                      <SecurityIcon />: Garov so'm : {product.price} Kuniga 300
                      km beriladi unda ortiq har bir kilometr uchun : 1000
                    </Typography>
                    <Typography>
                      <DriveEtaIcon />
                      {product.petrol}
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
          ))
        ) : (
          <CardComm />
        )}
      </div>
    </Container>
  );
};

export default Filter;
