import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Card } from "@/shared/ui/Card";
import { Paragraph } from "@/shared/ui/Paragraph";
import { AppLink, VariantLink } from "@/shared/ui/AppLink";
import { INotification } from "../../model/types/notifications";
import css from "./NotificationItem.module.scss";

interface INotificationItemProps {
  className?: string;
  item: INotification;
}

export const NotificationItem = memo(
  ({ className, item }: INotificationItemProps) => {
    const { description, title, href } = item;
    const { t } = useTranslation();

    return (
      <Card Tag="li" className={classNames(css.NotificationItem, {}, [className])}>
        <Paragraph className={css.NotificationItem__title}>{title}</Paragraph>

        <Paragraph className={css.NotificationItem__text}>
          {description}
        </Paragraph>

        {href && (
          <AppLink
            variant={VariantLink.BUTTON_LINK}
            className={css.NotificationItem__link}
            to={href}
          >
            {t("Перейти")}
          </AppLink>
        )}
      </Card>
    );
  }
);
