import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "shared/lib/hooks/userAppDIspatch/userAppDIspatch";
import {
  DynamicModulesLoader,
  TReducersList,
} from "shared/lib/components/DynamicModulesLoader/DynamicModulesLoader";
import { Section } from "shared/ui/Section";
import { Text, TextTheme } from "shared/ui/Text";
import {
  ProfileCard,
  fetchProfileData,
  getProfileReadOnly,
  profileActions,
  profileReducer,
  updateProfileData,
  getProfileForm,
  getProfileError,
  getProfileLoading,
  getProfileValidateErrors,
  ValidateProfileErrors,
} from "../../../entities/Profile";
import { Countries } from "../../../entities/Countries";
import { Currency } from "../../../entities/Currency";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";

const reducers: TReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const profileData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileLoading);
  const readOnly = useSelector(getProfileReadOnly);
  const validateErrors = useSelector(getProfileValidateErrors);
  const { t } = useTranslation("profile");

  const validateErrorsTranslate = {
    [ValidateProfileErrors.INCORRECT_AGE]: t("Некорректный возраст"),
    [ValidateProfileErrors.INCORRECT_CITY]: t("Некорректный город"),
    [ValidateProfileErrors.INCORRECT_COUNTRY]: t("Некорректная страна"),
    [ValidateProfileErrors.INCORRECT_CURRENCY]: t("Некорректная валюта"),
    [ValidateProfileErrors.INCORRECT_USER_DATA]: t(
      "Некорректные данные имени, логина или фамилии"
    ),
    [ValidateProfileErrors.NO_DATA]: t("Данные не найдены"),
    [ValidateProfileErrors.SERVER_ERROR]: t("Ошибка сервера"),
  };

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  const onChangeFirstName = useCallback(
    (firstName: string) => {
      dispatch(profileActions.updateProfile({ first: firstName }));
    },
    [dispatch]
  );

  const onChangeLastName = useCallback(
    (lastname: string) => {
      dispatch(profileActions.updateProfile({ lastname }));
    },
    [dispatch]
  );

  const onChangeNickname = useCallback(
    (username: string) => {
      dispatch(profileActions.updateProfile({ username }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (city: string) => {
      dispatch(profileActions.updateProfile({ city }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (age: string) => {
      dispatch(profileActions.updateProfile({ age: Number(age || 0) }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (country: Countries) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (avatar: string) => {
      dispatch(profileActions.updateProfile({ avatar }));
    },
    [dispatch]
  );

  const onChangeSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <DynamicModulesLoader reducers={reducers} removeAfterUnmount>
      <Section>
        <ProfilePageHeader />

        {validateErrors?.length > 0 &&
          validateErrors.map((errorText) => (
            <Text
              key={errorText}
              text={validateErrorsTranslate[errorText]}
              theme={TextTheme.ERROR}
            />
          ))}

        <ProfileCard
          data={profileData}
          error={error}
          isLoading={isLoading}
          readonly={readOnly}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeSave={onChangeSave}
          onChangeNickname={onChangeNickname}
          onChangeCity={onChangeCity}
          onChangeAge={onChangeAge}
          onChangeCountry={onChangeCountry}
          onChangeCurrency={onChangeCurrency}
          onChangeAvatar={onChangeAvatar}
        />
      </Section>
    </DynamicModulesLoader>
  );
};

export default ProfilePage;
