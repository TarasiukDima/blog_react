import { FC, Suspense } from "react";
import { useOutlet } from "react-router-dom";
import { Header } from "widgets/Header";
import { Footer } from "widgets/Footer/";
import { Sidebar } from "widgets/Sidebar/";
import { classNames } from "shared/lib/classNames/classNames";
import { navigationApp } from "app/config/roteConfig";
import { Wrapper } from "shared/ui/Wrapper/ui/Wrapper";
import { Spinner } from "shared/ui/Spinner";
import { useTheme } from "../../../providers/ThemeProvider";
import css from "./AppLayout.module.scss";

const AppLayout: FC = () => {
  const { theme } = useTheme();
  const currentOutlet = useOutlet();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Header navigationApp={navigationApp} />
      <main className={css.main}>
        <Wrapper className={css.wrapper}>
          <Sidebar />
          <Suspense fallback={<Spinner />}>{currentOutlet}</Suspense>
        </Wrapper>
      </main>
      <Footer />
    </div>
  );
};

export { AppLayout };
