import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "../../pages/AboutPage";
import { MainPage } from "../../pages/MainPage";

const RoutesApp = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/"} element={<MainPage />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesApp;
