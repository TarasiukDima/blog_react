import { memo, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { classNames } from "@/shared/lib/classNames/classNames";
import NotificationsIcon from "@/shared/assets/icons/notification.svg";
import { NotificationList } from "@/entities/Notification";
import { Popover } from "@/shared/ui/Popups";
import { Icon } from "@/shared/ui/Icon";
import { Drawer } from "@/shared/ui/Drawer";
import { Button, VariantButton } from "@/shared/ui/Button";

interface INotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo(
  ({ className }: INotificationButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeHandler = () => {
      setIsOpen(false);
    };

    const openHandler = () => {
      setIsOpen(true);
    };

    return (
      <>
        <BrowserView>
          <Popover
            className={classNames("", {}, [className])}
            trigger={<Icon Svg={NotificationsIcon} />}
            direction="bottom right"
            isTriggerIcon
          >
            <NotificationList />
          </Popover>
        </BrowserView>

        <MobileView>
          <Button onClick={openHandler} variant={VariantButton.ICON_BUTTON}>
            <Icon Svg={NotificationsIcon} />
          </Button>

          <Drawer isOpen={isOpen} onClose={closeHandler}>
            <NotificationList />
          </Drawer>
        </MobileView>
      </>
    );
  }
);
