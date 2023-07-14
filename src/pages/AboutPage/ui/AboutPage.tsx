import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Section } from "shared/ui/Section";
import { Title } from "shared/ui/Title";

const AboutPage = () => {
  const { t } = useTranslation("about");

  return (
    <Section>
      <Title Tag="h1">{t("title")}</Title>
    </Section>
  );
};

export default memo(AboutPage);
