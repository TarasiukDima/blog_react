import type { Meta, StoryObj } from "@storybook/react";
import { CommentList } from "./CommentList";

const meta: Meta<typeof CommentList> = {
  title: "entities/Comment/CommentList",
  component: CommentList,
  tags: ["entities"],
  args: {
    comments: [
      {
        id: "1",
        text: "hello world",
        user: { id: "1", username: "Vasya" },
      },
      {
        id: "2",
        text: "Comment 2",
        user: { id: "1", username: "Petya" },
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Normal: Story = {
  args: {},
};
export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
