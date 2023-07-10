import type { Meta, StoryObj } from "@storybook/react";
import { ArticlePageFilters as ArticlePageFiltersComponent } from "./ArticlePageFilters";

const meta: Meta<typeof ArticlePageFiltersComponent> = {
  title: "pages/ArticlePageFilters",
  component: ArticlePageFiltersComponent,
  tags: ["pages"],
};

export default meta;
type Story = StoryObj<typeof ArticlePageFiltersComponent>;

export const ArticlePageFilters: Story = {
  args: {},

  decorators: [],
};
