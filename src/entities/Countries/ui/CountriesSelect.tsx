import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Listbox } from "@/shared/ui/Popups";
import { Countries } from "../model/consts/countries";

interface ICountriesSelectProps {
  className?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (val: Countries) => void;
}

const listCountries = [
  {
    id: 1,
    content: Countries.Belarus,
    value: Countries.Belarus,
  },
  {
    id: 2,
    content: Countries.Kazakhstan,
    value: Countries.Kazakhstan,
  },
  {
    id: 3,
    content: Countries.Russia,
    value: Countries.Russia,
  },
  {
    id: 4,
    content: Countries.Ukraine,
    value: Countries.Ukraine,
  },
];

export const CountriesSelect = memo(
  ({ className, value, disabled = false, onChange }: ICountriesSelectProps) => {
    const { t } = useTranslation("profile");

    const onChangeHandler = useCallback(
      (val: string) => {
        onChange?.(val as Countries);
      },
      [onChange]
    );

    return (
      <Listbox
        className={className}
        value={value ?? ""}
        onChange={onChangeHandler}
        readonly={disabled}
        items={listCountries}
        defaultValue={t("Выберите страну")}
        label={t("Ваша страна")}
        direction="top left"
      />
    );
  }
);
