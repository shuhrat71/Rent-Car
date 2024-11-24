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
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import { Container } from "@mui/material";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import CardComm from "../Card";
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
    color: "black",
    petrol: "Gaz",
  },
  {
    id: 2,
    category: "Mexanik",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxz2PB8k3TitoNqWoXoFZh5gizeV7MCnwdOA&s",
    carName: "Cobalt",
    price: "3000000",
    color: "white",
    petrol: "Benzin",
  },
  {
    id: 3,
    category: "Avtomat",
    url: "https://secure-developments.com/shared/chile/gm_forms/assets/front/images/jellys/65f46f72e48fd.png",
    carName: "Onix",
    price: "3000000",
    color: "Kumushrang",
    petrol: "Gaz",
  },
  {
    id: 4,
    category: "Avtomat",
    url: "https://ruautoshop.com/auto/images/000001213975ddb2d345.png",
    carName: "CHEVROLET NEXIA 3 YANGI 2022",
    price: "3000000",
    color: "Kulrang",
    petrol: "Gaz",
  },
  {
    id: 5,
    category: "Avtomat",
    url: "https://ruautoshop.com/auto/images/000001213975ddb2d345.png",
    carName: "CHEVROLET NEXIA 3 YANGI 2022",
    price: "3000000",
    color: "Kulrang",
    petrol: "Gaz",
  },
  {
    id: 6,
    category: "Avtomat",
    url: "https://ruautoshop.com/auto/images/000001213975ddb2d345.png",
    carName: "CHEVROLET NEXIA 3 YANGI 2022",
    price: "3000000",
    color: "Kulrang",
    petrol: "Gaz",
  },
];

const Filter: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPrice, setSelectedPrice] = useState<string>("all");
  const [selectedColor, setSelectedColor] = useState<string>("all");
  const [selectedImg, setSelectedImg] = useState<string>("all");
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
      "Narx",
      ...Array.from(new Set(database.map((product) => product.petrol))),
    ],
    []
  );
  const url = useMemo(
    () => [
      "Narx",
      ...Array.from(new Set(database.map((product) => product.url))),
    ],
    []
  );

  // Filtrlash funksiyasi
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
      const matchesImg = selectedImg === "" || product.url === selectedImg;
      return (
        matchesSearch &&
        matchesCategory &&
        matchesColor &&
        matchesPrice &&
        matchesPetrol &&
        matchesImg
      );
    });
  }, [search, selectedCategory, selectedColor, selectedImg, selectedPetrol]);

  return (
    <Container maxWidth="xl">
      <h1>Mahsulot Filtri</h1>

      {/* Qidiruv */}

      {/* Dropdownlar */}
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Qidiruv..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "200px",
            marginBottom: "20px",
          }}
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
          onChange={(e) => setSelectedImg(e.target.value)}
          value={selectedImg}
        >
          {url.map((url) => (
            <option key={url} value={url}>
              {url}
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
      </div>

      <div>
        {filteredData.length > 0 ? (
          filteredData.map((product) => (
            <Card sx={{ maxWidth: 375 }} key={product.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="190"
                  image={laceti}
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
                    <Typography>{product.color}</Typography>
                    <Typography>
                      <SecurityIcon />: Garov so'm : {product.price} Kuniga 300
                      km beriladi unda ortiq har bir kilometr uchun : 1000
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
          ))
        ) : (
          <Typography>Hechnarsa topilmadi</Typography>
        )}
      </div>
    </Container>
  );
};

export default Filter;
