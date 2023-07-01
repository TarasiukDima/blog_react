import { useTranslation } from "react-i18next";
import { ProfileCard, fetchProfileData, profileReducer } from "entities/Profile";
import {
  DynamicModulesLoader,
  TReducersList,
} from "shared/lib/components/DynamicModulesLoader/DynamicModulesLoader";
import { useAppDispatch } from "shared/lib/hooks/userAppDIspatch/userAppDIspatch";
import { Section } from "shared/ui/Section";
import { Title } from "shared/ui/Title";
import { useEffect } from "react";

const reducers: TReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);
  return (
    <DynamicModulesLoader reducers={reducers} removeAfterUnmount>
      <Section>
        <Title>{t("title")}</Title>
        <ProfileCard />
      </Section>
    </DynamicModulesLoader>
  );
};

export default ProfilePage;
