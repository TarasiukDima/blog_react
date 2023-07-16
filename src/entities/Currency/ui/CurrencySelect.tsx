import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Listbox } from "shared/ui/Popups";
import { Currency } from "../model/consts/currency";

interface ICurrencySelectProps {
  className?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (val: Currency) => void;
}

const listCurrencies = [
  {
    id: 1,
    content: Currency.EUR,
    value: Currency.EUR,
  },
  {
    id: 2,
    content: Currency.RUB,
    value: Currency.RUB,
  },
  {
    id: 3,
    content: Currency.USD,
    value: Currency.USD,
  },
];
export const CurrencySelect = memo(
  ({
    className,
    defaultValue = "",
    value,
    disabled = false,
    onChange,
  }: ICurrencySelectProps) => {
    const { t } = useTranslation("profile");

    const onChangeHandler = useCallback(
      (val: string) => {
        onChange?.(val as Currency);
      },
      [onChange]
    );

    return (
      <Listbox
        className={className}
        value={value ?? ""}
        onChange={onChangeHandler}
        readonly={disabled}
        items={listCurrencies}
        defaultValue={defaultValue || t("Выберите валюту")}
        label={t("Валюта")}
        direction="top left"
      />
    );
  }
);
