import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ArticleEditPageComponent from "./ArticleEditPage";

const meta: Meta<typeof ArticleEditPageComponent> = {
  title: "pages/Article/ArticleEditPage",
  component: ArticleEditPageComponent,
  tags: ["pages"],
  args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleEditPageComponent>;

export const ArticleEditPage: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};
