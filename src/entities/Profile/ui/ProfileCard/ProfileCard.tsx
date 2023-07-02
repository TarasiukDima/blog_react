import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Input } from "shared/ui/Input";
import { Spinner } from "shared/ui/Spinner";
import { Text, TextTheme } from "shared/ui/Text";
import { Avatar } from "shared/ui/Avatar";
import { Currency, CurrencySelect } from "../../../../entities/Currency";
import { Countries, CountriesSelect } from "../../../../entities/Countries";
import { IProfile } from "../../model/types/user";
import css from "./ProfileCard.module.scss";

interface IProfileCardProps {
  className?: string;
  data?: IProfile | null;
  error: string;
  isLoading: boolean;
  readonly: boolean;
  onChangeFirstName?: (firstName: string) => void;
  onChangeLastName?: (lastname: string) => void;
  onChangeNickname?: (username: string) => void;
  onChangeCity?: (city: string) => void;
  onChangeAge?: (age: string) => void;
  onChangeCountry?: (country: Countries) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeAvatar?: (avatar: string) => void;
  onChangeSave?: () => void;
}

export const ProfileCard: FC<IProfileCardProps> = ({
  className = "",
  data,
  error,
  isLoading,
  readonly,
  onChangeFirstName,
  onChangeLastName,
  onChangeNickname,
  onChangeCity,
  onChangeAge,
  onChangeCountry,
  onChangeCurrency,
  onChangeAvatar,
  onChangeSave,
}) => {
  const { t } = useTranslation("profile");

  if (isLoading) {
    return (
      <div className={classNames(css.ProfileCard, {}, [className])}>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(css.ProfileCard, {}, [className])}>
        <Text
          title={t("Ошибка загрузки данных профиля")}
          text={t("Попробуйте обновить страницу")}
          theme={TextTheme.ERROR}
        />
      </div>
    );
  }

  return (
    <div
      className={classNames(
        css.ProfileCard,
        {
          [css.edited]: !readonly,
        },
        [className]
      )}
    >
      {data?.avatar && <Avatar src={data?.avatar} size={100} />}

      <form className={css.ProfileCard__form} onSubmit={onChangeSave}>
        <Input
          value={data?.first}
          readonly={readonly}
          onChange={onChangeFirstName}
          placeholder={t("Ваше имя")}
          type="text"
        />

        <Input
          value={data?.lastname}
          readonly={readonly}
          onChange={onChangeLastName}
          placeholder={t("Ваша фамилия")}
          type="text"
        />

        <Input
          value={data?.username}
          readonly={readonly}
          onChange={onChangeNickname}
          placeholder={t("Ваш ник")}
          type="text"
        />

        <Input
          value={data?.age}
          readonly={readonly}
          onChange={onChangeAge}
          placeholder={t("Ваш возраст")}
          type="number"
        />

        <CountriesSelect
          value={data?.country}
          disabled={readonly}
          onChange={onChangeCountry}
        />

        <Input
          value={data?.city}
          readonly={readonly}
          onChange={onChangeCity}
          placeholder={t("Ваш город")}
          type="text"
        />

        <CurrencySelect
          value={data?.currency}
          onChange={onChangeCurrency}
          disabled={readonly}
        />

        <Input
          value={data?.avatar}
          readonly={readonly}
          onChange={onChangeAvatar}
          placeholder={t("Ваш аватар (ссылка)")}
          type="text"
        />

        {!readonly && (
          <Input type="submit" readonly={readonly} value={t("Сохранить")} />
        )}
      </form>
    </div>
  );
};
