import { Route, Routes } from "react-router-dom";

import "./App.css";
import NotFound from "./Pages/NotFound";
import { IRoute, PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routes";
import Rented from "./Pages/Rented/inxdex";
import { SignInWrapper } from "./Pages/SignIn/SignIn";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import path from "path";

function App() {
  const token = "gdfs";

  if (token) {
    return (
      <Routes>
        {PRIVATE_ROUTES.map(({ component, path }: IRoute) => (
          <Route element={component} path={path} />
        ))}
        <Route path="/notFound" element={<NotFound />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/rented" element={<Rented />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;
