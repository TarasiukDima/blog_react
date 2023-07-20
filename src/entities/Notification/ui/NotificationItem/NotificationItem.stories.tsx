import type { Meta, StoryObj } from "@storybook/react";
import { NotificationItem } from "./NotificationItem";
import { notificationsListMockData } from "@/shared/lib/tests/mocks/mockData/mockData";

const meta = {
  title: "entities/NotificationItem",
  component: NotificationItem,
  tags: ["entities"],
  args: {},
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    item: notificationsListMockData[0],
  },
};

export const WithLink: Story = {
  args: {
    item: notificationsListMockData[1],
  },
};
