import { FC, ReactNode } from "react";
import Header from "widgets/Header";
import Footer from "widgets/Footer/";
import css from "./Layout.module.scss";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className={css.layout}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
