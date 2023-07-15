import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { EditableProfileCard } from "features/editableProfileCard";
import { Section } from "shared/ui/Section";
import { Title } from "shared/ui/Title";

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("profile");

  if (!id) {
    return (
      <Section>
        <Title Tag="h1">{t("Пользователь не найден")}</Title>
      </Section>
    );
  }

  return (
    <Section>
      <EditableProfileCard id={id} />
    </Section>
  );
};

export default ProfilePage;
