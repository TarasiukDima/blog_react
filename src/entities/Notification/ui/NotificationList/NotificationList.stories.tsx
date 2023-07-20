import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import {
  notificationsListMockData,
  userMockInitial,
} from "@/shared/lib/tests/mocks/mockData/mockData";
import { NotificationList } from "./NotificationList";

const meta = {
  title: "entities/NotificationList",
  component: NotificationList,
  tags: ["entities"],
  args: {},
  decorators: [
    StoreDecorator({
      user: userMockInitial,
    }),
  ],
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: "GET",
        status: 200,
        response: [...notificationsListMockData],
      },
    ],
  },
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};
