import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import { IRoute, PRIVATE_ROUTES } from "./routes";
import Rented from "./Pages/Rented/inxdex";
import SignUp from "./Pages/SignUp";
import CardDetail from "./Pages/Rented/inxdex";
import VerticalTabs from "Pages/Admin";
import LogIn from "./Pages/LogIn";

function App() {
  const token = "k";

  if (token) {
    return (
      <Routes>
        {PRIVATE_ROUTES.map(({ component, path }: IRoute) => (
          <Route element={component} path={path} />
        ))}
        <Route path="/notFound" element={<NotFound />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/rented" element={<Rented />} />
        <Route path="/card/:id" element={<CardDetail />} />
        <Route path="/archive" element={<VerticalTabs />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;
