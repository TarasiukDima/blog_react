import type { Meta, StoryObj } from "@storybook/react";
import MainPageComponent from "./MainPage";

const meta: Meta<typeof MainPageComponent> = {
  title: "pages/MainPage",
  component: MainPageComponent,
  tags: ["pages"],
};

export default meta;
type Story = StoryObj<typeof MainPageComponent>;

export const MainPage: Story = { args: {} };
