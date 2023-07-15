import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import ErrorPageComponent from "./ErrorPage";

const meta: Meta<typeof ErrorPageComponent> = {
  title: "pages/ErrorPage",
  component: ErrorPageComponent,
  tags: ["pages"],
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ErrorPageComponent>;

export const ErrorPage: Story = { args: {} };
