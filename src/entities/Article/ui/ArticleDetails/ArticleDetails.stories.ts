import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { articleMockContent } from "@/shared/lib/tests/mocks/mockData/mockData";
import { ArticleDetails } from "./ArticleDetails";

const meta: Meta<typeof ArticleDetails> = {
  title: "entities/Article/ArticleDetails",
  component: ArticleDetails,
  tags: ["pages"],
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const Normal: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      articleDetails: {
        isLoading: false,
        data: articleMockContent,
        error: null,
      },
    }),
  ],
};

export const Loading: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      articleDetails: {
        isLoading: true,
        data: null,
        error: null,
      },
    }),
  ],
};

export const WithError: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      articleDetails: {
        isLoading: false,
        data: null,
        error: "Error",
      },
    }),
  ],
};
