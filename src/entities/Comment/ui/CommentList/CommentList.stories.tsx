import type { Meta, StoryObj } from "@storybook/react";
import { commentListMockData } from "@/shared/lib/tests/mocks/mockData/mockData";
import { CommentList } from "./CommentList";

const meta: Meta<typeof CommentList> = {
  title: "entities/Comment/CommentList",
  component: CommentList,
  tags: ["entities"],
  args: {
    comments: commentListMockData,
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
