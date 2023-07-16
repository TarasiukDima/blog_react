import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import NotificationsIcon from "shared/assets/icons/notification.svg";
import { NotificationList } from "entities/Notification";
import { Popover } from "shared/ui/Popups";
import { Icon } from "shared/ui/Icon";
import css from "./NotificationButton.module.scss";

interface INotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo(
  ({ className }: INotificationButtonProps) => {
    return (
      <Popover
        className={classNames("", {}, [className])}
        trigger={<Icon Svg={NotificationsIcon} />}
        direction="bottom right"
        isTriggerIcon
      >
        <NotificationList />
      </Popover>
    );
  }
);
