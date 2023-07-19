import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui/Stack";
import { Skeleton } from "@/shared/ui/Skeleton";
import { useNotifications } from "../../api/notificationApi";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import css from "./NotificationList.module.scss";

interface INotificationListProps {
  className?: string;
}

export const NotificationList = memo(
  ({ className }: INotificationListProps) => {
    const {
      isError,
      isLoading,
      data: notifications = [],
    } = useNotifications(null, {
      pollingInterval: 10000,
    });

    if (!isLoading && !isError && !notifications) {
      return null;
    }

    if (isLoading) {
      return (
        <VStack
          Tag="div"
          className={classNames(css.NotificationList, {}, [className])}
        >
          <Skeleton type="square" height="80px" />
          <Skeleton type="square" height="80px" />
          <Skeleton type="square" height="80px" />
        </VStack>
      );
    }

    return (
      <VStack
        Tag="ul"
        className={classNames(css.NotificationList, {}, [className])}
      >
        {notifications.map((item) => (
          <NotificationItem key={item.id} item={item} />
        ))}
      </VStack>
    );
  }
);
