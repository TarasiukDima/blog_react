import { FC, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "@/shared/lib/hooks/userAppDIspatch/userAppDIspatch";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, VariantButton } from "@/shared/ui/Button";
import { Title } from "@/shared/ui/Title";
import { HStack } from "@/shared/ui/Stack/";
import { getUserAuthData } from "../../../../entities/User";
import { getProfileReadOnly } from "../../model/selectors/getProfileReadOnly/getProfileReadOnly";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import { profileActions } from "../../model/slice/profileSlice";
import css from "./EditableProfileCardHeader.module.scss";

interface IEditableProfileCardHeaderProps {
  className?: string;
  id?: string;
}

export const EditableProfileCardHeader: FC<IEditableProfileCardHeaderProps> = ({
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
      <Button
        onClick={onEditHandler}
        variant={VariantButton.STANDARD}
        data-testid="EditableProfileCardHeader.Edit"
      >
        {t("Редактировать")}
      </Button>
    ) : (
      <Button
        onClick={onCancelEditHandler}
        variant={VariantButton.STANDARD}
        data-testid="EditableProfileCardHeader.Cancel"
      >
        {t("Отменить")}
      </Button>
    );
  };

  return (
    <HStack
      className={classNames(css.EditableProfileCardHeader, {}, [className])}
      align="center"
      justify="between"
    >
      <Title
        className={css.EditableProfileCardHeader__title}
        data-testid="EditableProfileCardHeader.Title"
      >
        {t("Профиль")}
      </Title>

      {showButton()}
    </HStack>
  );
};
