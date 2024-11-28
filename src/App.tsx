import { Route, Routes } from "react-router-dom";

import "./App.css";
import NotFound from "./Pages/NotFound";
import { IRoute, PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routes";

function App() {
  const token = "qwq";

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
