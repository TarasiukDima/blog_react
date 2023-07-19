import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { ArticlePageFilters as ArticlePageFiltersComponent } from "./ArticlePageFilters";

const meta: Meta<typeof ArticlePageFiltersComponent> = {
  title: "pages/Article/ArticlePageFilters",
  component: ArticlePageFiltersComponent,
  tags: ["pages"],
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticlePageFiltersComponent>;

export const ArticlePageFilters: Story = {
  args: {},
};
