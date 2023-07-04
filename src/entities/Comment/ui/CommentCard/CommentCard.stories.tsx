import type { Meta, StoryObj } from "@storybook/react";
import { CommentCard as CommentCardComponent } from "./CommentCard";

const meta: Meta<typeof CommentCardComponent> = {
  title: "entities/Comment/CommentCard",
  component: CommentCardComponent,
  tags: ["entities"],
  args: {},
};

export default meta;
type Story = StoryObj<typeof CommentCardComponent>;

const data = {
  id: "1",
  text: "hello world",
  user: { id: "1", username: "Vasya" },
};

export const Normal: Story = {
  args: {
    body: data,
  },
};

export const Loading: Story = {
  args: {
    body: data,
    isLoading: true,
  },
};
