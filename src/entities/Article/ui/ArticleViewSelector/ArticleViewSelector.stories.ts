import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ArticleView } from "@/entities/Article";
import { ArticleViewSelector as ArticleViewSelectorComponent } from "./ArticleViewSelector";

const meta: Meta<typeof ArticleViewSelectorComponent> = {
  title: "entities/Article/ArticleViewSelector",
  component: ArticleViewSelectorComponent,
  tags: ["pages"],
};

export default meta;
type Story = StoryObj<typeof ArticleViewSelectorComponent>;

export const ArticleViewSelector: Story = {
  args: {
    view: ArticleView.GRID,
    onViewClick: action("ArticleViewSelector click"),
  },
};
