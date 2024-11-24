import { Container } from "@mui/material";
import React, { useState, useMemo } from "react";
import CardComm from "../Card";
import { Selectors__wrapper } from "./select";
interface Product {
  id: number;
  carName: string;
  price: string;
  color: string;
  petrol: string;
  category: string;
}

const database: Product[] = [
  {
    id: 1,
    category: "Mexanik",
    carName: "Gentra",
    price: "3000000",
    color: "black",
    petrol: "Gaz",
  },
  {
    id: 2,
    category: "Mexanik",
    carName: "Cobalt",
    price: "3000000",
    color: "white",
    petrol: "Finance",
  },
  {
    id: 3,
    category: "Avtomat",
    carName: "Onix",
    price: "3000000",
    color: "Appetizer - Shrimp Puff",
    petrol: "Finance",
  },
  {
    id: 4,
    category: "Avtomat",
    carName: "Nexia 3",
    price: "3000000",
    color: "Aromat Spice / Seasoning",
    petrol: "Consumer Services",
  },
];

const Filter: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPrice, setSelectedPrice] = useState<string>("all");
  const [selectedColor, setSelectedColor] = useState<string>("all");

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
      return matchesSearch && matchesCategory && matchesColor && matchesPrice;
    });
  }, [search, selectedCategory, selectedColor]);

  return (
    <Container maxWidth="xl">
      <h1>Mahsulot Filtri</h1>

      {/* Qidiruv */}
      <Selectors__wrapper>
        <input
          type="text"
          placeholder="Qidiruv..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "300px",
            marginBottom: "20px",
          }}
        />

        {/* Dropdownlar */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
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
        </div>
      </Selectors__wrapper>
      <div>
        {filteredData.length > 0 ? (
          filteredData.map((product) => (
            <div key={product.id} style={{ marginBottom: "10px" }}>
              <strong>{product.carName}</strong> - {product.category} -{" "}
              {product.color}
            </div>
          ))
        ) : (
          <CardComm />
        )}
      </div>
    </Container>
  );
};

export default Filter;
