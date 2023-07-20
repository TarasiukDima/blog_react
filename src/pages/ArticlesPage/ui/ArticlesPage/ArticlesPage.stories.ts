import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ArticlesPageComponent from "./ArticlesPage";

const meta: Meta<typeof ArticlesPageComponent> = {
  title: "pages/Article/ArticlesPage",
  component: ArticlesPageComponent,
  tags: ["pages"],
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticlesPageComponent>;

export const ArticlesPage: Story = {
  args: {},

  decorators: [],
};
