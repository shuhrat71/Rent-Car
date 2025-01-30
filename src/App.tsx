import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import { IRoute, PRIVATE_ROUTES } from "./routes";
import Rented from "./Pages/Rented/inxdex";
import SignUp from "./Pages/SignUp";
import CardDetail from "./Pages/Rented/inxdex";
import VerticalTabs from "Pages/Admin";
import LogIn from "./Pages/LogIn";
import { FC } from "react";

const MotionWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="motion-wrapper-enter">{children}</div>;
};

function App() {
  const location = useLocation();
  const token = "k"; // Tokenni tekshirish uchun

  return (
    <div className="app">
      <Routes location={location} key={location.pathname}>
        {token ? (
          <>
            {PRIVATE_ROUTES.map(({ component, path }: any) => (
              <Route
                key={path}
                path={path}
                element={<MotionWrapper>{component}</MotionWrapper>}
              />
            ))}
            <Route
              path="/notFound"
              element={
                <MotionWrapper>
                  <NotFound />
                </MotionWrapper>
              }
            />
            <Route
              path="/log-in"
              element={
                <MotionWrapper>
                  <LogIn />
                </MotionWrapper>
              }
            />
            <Route
              path="/sign-up"
              element={
                <MotionWrapper>
                  <SignUp />
                </MotionWrapper>
              }
            />
            <Route
              path="/rented:id"
              element={
                <MotionWrapper>
                  <Rented />
                </MotionWrapper>
              }
            />
            <Route
              path="/card/:id"
              element={
                <MotionWrapper>
                  <CardDetail />
                </MotionWrapper>
              }
            />
            <Route
              path="/archive"
              element={
                <MotionWrapper>
                  <VerticalTabs />
                </MotionWrapper>
              }
            />
          </>
        ) : (
          <>
            <Route
              path="/log-in"
              element={
                <MotionWrapper>
                  <LogIn />
                </MotionWrapper>
              }
            />
            <Route
              path="/sign-up"
              element={
                <MotionWrapper>
                  <SignUp />
                </MotionWrapper>
              }
            />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
