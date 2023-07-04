import type { Meta, StoryObj } from "@storybook/react";
import { IArticle } from "entities/Article";
import ArticlesPageComponent from "./ArticlesPage";

const meta: Meta<typeof ArticlesPageComponent> = {
  title: "pages/ArticlesPage",
  component: ArticlesPageComponent,
  tags: ["pages"],
};

export default meta;
type Story = StoryObj<typeof ArticlesPageComponent>;

export const ArticlesPage: Story = {
  args: {},

  decorators: [],
};
