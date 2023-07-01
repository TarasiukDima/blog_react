import { FC } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileLoading } from "../../model/selectors/getProfileLoading/getProfileLoading";
import css from "./ProfileCard.module.scss";

interface IProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<IProfileCardProps> = ({ className = "" }) => {
  const profileData = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileLoading);

  const { t } = useTranslation("profile");

  return (
    <div className={classNames(css.ProfileCard, {}, [className])}>
      <Button>Button</Button>
    </div>
  );
};
