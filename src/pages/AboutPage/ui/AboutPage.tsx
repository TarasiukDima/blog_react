import { useTranslation } from "react-i18next";
import Section from "shared/ui/Section";

const AboutPage = () => {
  const { t } = useTranslation('about');

  return <Section>{t("title")}</Section>;
};

export default AboutPage;
