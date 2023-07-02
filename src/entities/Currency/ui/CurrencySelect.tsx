import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select";
import { Currency } from "../model/types/currency";

interface ICurrencySelectProps {
  className?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (val: Currency) => void;
}

const listCurrencies = [
  {
    content: Currency.EUR,
    value: Currency.EUR,
  },
  {
    content: Currency.RUB,
    value: Currency.RUB,
  },
  {
    content: Currency.USD,
    value: Currency.USD,
  },
];
export const CurrencySelect = memo(
  ({ className, value, disabled = false, onChange }: ICurrencySelectProps) => {
    const { t } = useTranslation("profile");

    const onChangeHandler = useCallback(
      (val: string) => {
        onChange?.(val as Currency);
      },
      [onChange]
    );

    return (
      <Select
        className={className}
        value={value}
        onChange={onChangeHandler}
        disabled={disabled}
        options={listCurrencies}
        placeholder={t("Валюта")}
      />
    );
  }
);
