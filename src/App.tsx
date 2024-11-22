import "./App.css";
import { Route, Routes } from "react-router-dom";
import { IRoute, PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routes";
import NotFound from "./Pages/NotFound";

function App() {
  const token = "sdfvsdf";

  if (token) {
    return (
      <Routes>
        {PRIVATE_ROUTES.map(({ component, path }: IRoute) => (
          <Route element={component} path={path} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }

  return (
    <Routes>
      {PUBLIC_ROUTES.map(({ component, path }: IRoute) => (
        <Route element={component} path={path} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
