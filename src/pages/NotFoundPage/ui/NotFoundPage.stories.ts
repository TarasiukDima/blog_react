import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import NotFoundPageComponent from "./NotFoundPage";

const meta: Meta<typeof NotFoundPageComponent> = {
  title: "pages/NotFoundPage",
  component: NotFoundPageComponent,
  tags: ["pages"],
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof NotFoundPageComponent>;

export const NotFoundPage: Story = { args: {} };
