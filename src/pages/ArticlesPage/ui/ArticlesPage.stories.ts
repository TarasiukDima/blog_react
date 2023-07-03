import type { Meta, StoryObj } from "@storybook/react";
import ArticlesPageComponent from "./ArticlesPage";

const meta: Meta<typeof ArticlesPageComponent> = {
  title: "pages/ArticlesPage",
  component: ArticlesPageComponent,
  tags: ["pages"],
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};

export default meta;
type Story = StoryObj<typeof ArticlesPageComponent>;

export const ArticlesPage: Story = {
  args: {},
};
