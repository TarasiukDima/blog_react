import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select";
import { Countries } from "../model/types/countries";

interface ICountriesSelectProps {
  className?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (val: Countries) => void;
}

const listCountries = [
  {
    content: Countries.Belarus,
    value: Countries.Belarus,
  },
  {
    content: Countries.Kazakhstan,
    value: Countries.Kazakhstan,
  },
  {
    content: Countries.Russia,
    value: Countries.Russia,
  },
  {
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
      <Select
        className={className}
        value={value}
        onChange={onChangeHandler}
        disabled={disabled}
        options={listCountries}
        placeholder={t("Ваша страна")}
      />
    );
  }
);
