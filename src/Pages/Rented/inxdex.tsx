import { Container } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header";
type Props = {};

interface CardData {
  id: number;
  title: string;
  description: string;
}

function Rented({}: Props) {
  const location = useLocation();
  const navigate = useNavigate();

  const cardData = location.state as CardData;

  return (
    <Container>
      <Header />
    </Container>
  );
}

export default Rented;
