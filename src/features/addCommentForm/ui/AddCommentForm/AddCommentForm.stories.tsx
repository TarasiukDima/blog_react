import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import AddCommentForm from "./AddCommentForm";

const meta: Meta<typeof AddCommentForm> = {
  title: "features/Comment/AddCommentForm",
  component: AddCommentForm,
  tags: ["features"],
  args: {
    onSendComment: action("onSendComment"),
  },
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const CommentForm: Story = {
  args: {},
};
