import { FC, Suspense, useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { useOutlet } from "react-router-dom";
import { Header } from "widgets/Header";
import { Footer } from "widgets/Footer/";
import { Sidebar } from "widgets/Sidebar/";
import { Wrapper } from "shared/ui/Wrapper/ui/Wrapper";
import { Spinner } from "shared/ui/Spinner";
import { navigationApp } from "app/config/roteConfig";
import { Theme } from "shared/types";
import { userActions } from "../../../../entities/User";
import { useTheme } from "../../../providers/ThemeProvider";
import css from "./AppLayout.module.scss";

const AppLayout: FC = () => {
  const { theme } = useTheme();
  const currentOutlet = useOutlet();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (theme === Theme.DARK) {
      document.body.classList.add(Theme.DARK);
    } else {
      document.body.classList.remove(Theme.DARK);
    }
  }, [theme]);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <>
      <Header navigationApp={navigationApp} />

      <main className={css.main}>
        <Wrapper className={css.wrapper}>
          <Sidebar />
          <Suspense fallback={<Spinner />}>{currentOutlet}</Suspense>
        </Wrapper>
      </main>

      <Footer />
    </>
  );
};

export { AppLayout };
