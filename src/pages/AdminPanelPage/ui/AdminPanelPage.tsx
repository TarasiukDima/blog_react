import { useTranslation } from "react-i18next";
import { Section } from "@/shared/ui/Section";
import { Title } from "@/shared/ui/Title";
import css from "./AdminPanelPage.module.scss";

interface IAdminPanelPageProps {
  className?: string;
}

export const AdminPanelPage = ({ className }: IAdminPanelPageProps) => {
  const { t } = useTranslation("admin");

  return (
    <Section>
      <Title Tag="h1">{t("Админ панель")}</Title>
    </Section>
  );
};

export default AdminPanelPage;
