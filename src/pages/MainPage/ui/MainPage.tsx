import { useTranslation } from "react-i18next";
import Section from "shared/ui/Section";

const MainPage = () => {
  const { t } = useTranslation("main");

  return <Section>{t("title")}</Section>;
};

export default MainPage;
