import { FC, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "shared/lib/hooks/userAppDIspatch/userAppDIspatch";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, VariantButton } from "shared/ui/Button";
import { getUserAuthData } from "entities/User";
import { Title } from "shared/ui/Title";
import {
  getProfileForm,
  getProfileReadOnly,
  profileActions,
} from "entities/Profile";
import css from "./ProfilePageHeader.module.scss";

interface IProfilePageHeaderProps {
  className?: string;
  id?: string;
}

export const ProfilePageHeader: FC<IProfilePageHeaderProps> = ({
  className,
  id = "",
}) => {
  const { t } = useTranslation("profile");
  const readOnly = useSelector(getProfileReadOnly);
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileForm);
  const canEdit = authData?.id === profileData?.id;

  const onEditHandler = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEditHandler = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const showButton = () => {
    if (!canEdit) {
      return null;
    }

    return readOnly ? (
      <Button onClick={onEditHandler} variant={VariantButton.STANDARD}>
        {t("Редактировать")}
      </Button>
    ) : (
      <Button onClick={onCancelEditHandler} variant={VariantButton.STANDARD}>
        {t("Отменить")}
      </Button>
    );
  };

  return (
    <div className={classNames(css.ProfilePageHeader, {}, [className])}>
      <Title>{t("Профиль")}</Title>
      {showButton()}
    </div>
  );
};
