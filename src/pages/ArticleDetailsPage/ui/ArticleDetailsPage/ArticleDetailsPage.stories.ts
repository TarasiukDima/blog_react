import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { articleMockContent } from "@/shared/lib/tests/mocks/mockData/mockData";
import ArticleDetailsPageComponent from "./ArticleDetailsPage";

const meta: Meta<typeof ArticleDetailsPageComponent> = {
  title: "pages/Article/ArticleDetailsPage",
  component: ArticleDetailsPageComponent,
  tags: ["pages"],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageComponent>;

export const ArticleDetailsPage: Story = {
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
