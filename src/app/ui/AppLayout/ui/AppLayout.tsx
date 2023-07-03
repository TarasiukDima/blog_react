import { FC, Suspense, useEffect, useLayoutEffect } from "react";
import { useOutlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Header } from "widgets/Header";
import { Footer } from "widgets/Footer/";
import { Sidebar } from "widgets/Sidebar/";
import { Wrapper } from "shared/ui/Wrapper/ui/Wrapper";
import { Spinner } from "shared/ui/Spinner";
import { navigationApp } from "app/config/roteConfig";
import { useAppDispatch } from "shared/lib/hooks/userAppDIspatch/userAppDIspatch";
import { Theme } from "shared/types";
import { getUserInited, userActions } from "../../../../entities/User";
import { useTheme } from "../../../providers/ThemeProvider";
import css from "./AppLayout.module.scss";

const AppLayout: FC = () => {
  const { theme } = useTheme();
  const currentOutlet = useOutlet();
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

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
        {inited && (
          <Wrapper className={css.wrapper}>
            <Sidebar />
            <Suspense fallback={<Spinner />}>{currentOutlet}</Suspense>
          </Wrapper>
        )}
      </main>

      <Footer />
    </>
  );
};

export { AppLayout };
