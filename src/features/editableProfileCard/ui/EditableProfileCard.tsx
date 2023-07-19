import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "@/shared/lib/hooks/userAppDIspatch/userAppDIspatch";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Text } from "@/shared/ui/Text";
import {
  DynamicModulesLoader,
  TReducersList,
} from "@/shared/lib/components/DynamicModulesLoader/DynamicModulesLoader";
import { ProfileCard } from "../../../entities/Profile";
import { Countries } from "../../../entities/Countries";
import { Currency } from "../../../entities/Currency";
import { getProfileForm } from "../model/selectors/getProfileForm/getProfileForm";
import { getProfileError } from "../model/selectors/getProfileError/getProfileError";
import { getProfileLoading } from "../model/selectors/getProfileLoading/getProfileLoading";
import { getProfileReadOnly } from "../model/selectors/getProfileReadOnly/getProfileReadOnly";
import { getProfileValidateErrors } from "../model/selectors/getProfileValidateErrors/getProfileValidateErrors";
import { ValidateProfileErrors } from "../model/consts/consts";
import { fetchProfileData } from "../model/services/fetchProfileData/fetchProfileData";
import { profileActions, profileReducer } from "../model/slice/profileSlice";
import { updateProfileData } from "../model/services/updateProfileData/updateProfileData";
import { EditableProfileCardHeader } from "./EditableProfileCardHeader/EditableProfileCardHeader";

interface IEditableProfileCardProps {
  id: string;
}

const reducers: TReducersList = {
  profile: profileReducer,
};

export const EditableProfileCard = memo(({ id }: IEditableProfileCardProps) => {
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();
  const profileData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileLoading);
  const readOnly = useSelector(getProfileReadOnly);
  const validateErrors = useSelector(getProfileValidateErrors);

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

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

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
      {validateErrors?.length > 0 &&
        validateErrors.map((errorText) => (
          <Text
            key={errorText}
            title="Error"
            text={validateErrorsTranslate[errorText] ?? ""}
            theme="error"
            data-testid="EditableProfileCard.Error"
          />
        ))}

      <EditableProfileCardHeader />

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
    </DynamicModulesLoader>
  );
});
