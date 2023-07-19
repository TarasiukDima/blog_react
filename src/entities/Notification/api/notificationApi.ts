import { rtkApi } from "@/shared/api/apiRTKQuery";
import { INotification } from "../model/types/notifications";

const notificationAPi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Array<INotification>, null>({
      query: () => ({
        url: "/notifications",
      }),
    }),
  }),
});

export const useNotifications = notificationAPi.useGetNotificationsQuery;
