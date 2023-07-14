import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ArticleDetailsPageHeader as ArticleDetailsPageHeaderComponent } from "./ArticleDetailsPageHeader";

const meta: Meta<typeof ArticleDetailsPageHeaderComponent> = {
  title: "pages/Article/ArticleDetailsPageHeader",
  component: ArticleDetailsPageHeaderComponent,
  tags: ["pages"],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageHeaderComponent>;

export const ArticleDetailsPageHeader: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      articleDetails: {
        isLoading: false,
        error: null,
      },
    }),
  ],
};
