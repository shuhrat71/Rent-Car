import "./App.css";
import { Route, Routes } from "react-router-dom";
import { IRoute, PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routes";
import NotFound from "./Pages/NotFound";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

function App() {
  const token = "xcdc";

  if (token) {
    return (
      <Routes>
        {PRIVATE_ROUTES.map(({ component, path }: IRoute) => (
          <Route element={component} path={path} />
        ))}
        <Route path="/sing-in" element={<SignIn />} />
      </Routes>
    );
  }

  return (
    <Routes>
      {PUBLIC_ROUTES.map(({ component, path }: IRoute) => (
        <Route element={component} path={path} />
      ))}
      <Route path="*" element={<SignUp />} />
    </Routes>
  );
}

export default App;
