// Либо использовать @loadable/component, в рамках туториала - некритично
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { MainPage } from "./MainPage";
import Layout from "widgets/Layout";

export const RoutesApp = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
