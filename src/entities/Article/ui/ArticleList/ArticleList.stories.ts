import type { Meta, StoryObj } from "@storybook/react";
import { ArticleList } from "./ArticleList";
import { ArticleView } from "../../model/consts/consts";
import { articlesMockList } from "@/shared/lib/tests/mocks/mockData/mockData";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof ArticleList> = {
  title: "entities/Article/ArticleList",
  component: ArticleList,
  tags: ["pages"],
  args: {},
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

export const SmallItems: Story = {
  args: {
    articles: articlesMockList,
    isLoading: false,
    view: ArticleView.GRID,
  },
};

export const SmallItemsSkeleton: Story = {
  args: {
    articles: [],
    isLoading: true,
    view: ArticleView.GRID,
  },
};

export const BigItems: Story = {
  args: {
    articles: articlesMockList,
    isLoading: false,
    view: ArticleView.LIST,
  },
};

export const BigItemsSkeleton: Story = {
  args: {
    isLoading: true,
    articles: [],
    view: ArticleView.LIST,
  },
};

export const WithOutContent: Story = {
  args: {
    isLoading: false,
    articles: [],
    view: ArticleView.GRID,
  },
};
