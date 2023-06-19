import { FC, Suspense } from "react";
import { useOutlet } from "react-router-dom";
import { useTheme } from "../providers/ThemeProvider";
import Header from "widgets/Header";
import Footer from "widgets/Footer/";
import Sidebar from "widgets/Sidebar/";
import { classNames } from "shared/lib/classNames";
import { navigationApp } from "app/config/roteConfig";
import css from "./Layout.module.scss";
import Wrapper from "shared/ui/Wrapper/ui/Wrapper";

const AppLayout: FC = () => {
  const { theme } = useTheme();
  const currentOutlet = useOutlet();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Header navigationApp={navigationApp} />
      <main className={css.main}>
        <Wrapper className={css.wrapper}>
          <Sidebar />
          <Suspense fallback={<div>Loading...</div>}>{currentOutlet}</Suspense>
        </Wrapper>
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;