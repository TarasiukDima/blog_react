import type { Meta, StoryObj } from "@storybook/react";
import { commentListMockData } from "@/shared/lib/tests/mocks/mockData/mockData";
import { CommentCard as CommentCardComponent } from "./CommentCard";

const meta: Meta<typeof CommentCardComponent> = {
  title: "entities/Comment/CommentCard",
  component: CommentCardComponent,
  tags: ["entities"],
  args: {},
};

export default meta;
type Story = StoryObj<typeof CommentCardComponent>;

export const Normal: Story = {
  args: {
    body: commentListMockData[0],
  },
};

export const Loading: Story = {
  args: {
    body: commentListMockData[0],
    isLoading: true,
  },
};
