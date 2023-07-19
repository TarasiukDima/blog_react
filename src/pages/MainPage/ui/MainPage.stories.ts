import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import MainPageComponent from "./MainPage";

const meta: Meta<typeof MainPageComponent> = {
  title: "pages/MainPage",
  component: MainPageComponent,
  tags: ["pages"],
  decorators: [StoreDecorator({})],

};

export default meta;
type Story = StoryObj<typeof MainPageComponent>;

export const MainPage: Story = { args: {} };
