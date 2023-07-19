import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Section } from "@/shared/ui/Section";
import { Title } from "@/shared/ui/Title";
import css from "./ErrorPage.module.scss";

const ErrorPage: FC = () => {
  const { t } = useTranslation("error");
  const { state } = useLocation();
  let errorText = "";

  if (state && typeof state === "object" && errorText in state) {
    errorText = state.errorText;
  }

  return (
    <Section className={css.error_page}>
      <Title Tag="h1">{t("Что-то пошло не так!")}</Title>

      <p className={css.error_text}>{errorText}</p>
    </Section>
  );
};

export default ErrorPage;
