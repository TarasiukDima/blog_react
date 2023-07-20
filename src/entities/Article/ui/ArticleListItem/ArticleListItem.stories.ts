import type { Meta, StoryObj } from "@storybook/react";
import { articleMockContent } from "@/shared/lib/tests/mocks/mockData/mockData";
import { ArticleListItem } from "./ArticleListItem";
import { ArticleView } from "../../model/consts/consts";

const meta: Meta<typeof ArticleListItem> = {
  title: "entities/Article/ArticleListItem",
  component: ArticleListItem,
  tags: ["pages"],
};

export default meta;
type Story = StoryObj<typeof ArticleListItem>;

export const SmallItem: Story = {
  args: {
    article: articleMockContent,
    view: ArticleView.GRID,
  },
};

export const BigItem: Story = {
  args: {
    article: articleMockContent,
    view: ArticleView.LIST,
  },
};
