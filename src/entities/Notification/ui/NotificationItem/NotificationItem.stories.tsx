import type { Meta, StoryObj } from "@storybook/react";
import { NotificationItem } from "./NotificationItem";

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
    item: {
      id: "1",
      title: "Уведомление 1",
      description: "Произошло какое-то событие",
    },
  },
};
