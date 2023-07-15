import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import AboutPageComponent from "./AboutPage";

const meta: Meta<typeof AboutPageComponent> = {
  title: "pages/AboutPage",
  component: AboutPageComponent,
  tags: ["pages"],
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof AboutPageComponent>;

export const AboutPage: Story = { args: {} };
