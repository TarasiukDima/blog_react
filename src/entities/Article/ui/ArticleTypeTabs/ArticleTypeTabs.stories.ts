import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ArticleType } from "entities/Article/model/types/article";
import { ArticleTypeTabs as ArticleTypeTabsComponent } from "./ArticleTypeTabs";

const meta: Meta<typeof ArticleTypeTabsComponent> = {
  title: "entities/Article/ArticleTypeTabs",
  component: ArticleTypeTabsComponent,
  tags: ["pages"],
};

export default meta;
type Story = StoryObj<typeof ArticleTypeTabsComponent>;

export const ArticleTypeTabs: Story = {
  args: {
    articleType: ArticleType.ALL,
    onChangeTab: action("onChangeTab"),
  },
};
