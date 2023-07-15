import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import ForbiddenPageComponent from "./ForbiddenPage";

const meta = {
  title: "pages/ForbiddenPage",
  component: ForbiddenPageComponent,
  tags: ["pages"],
  args: {},
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof ForbiddenPageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ForbiddenPage: Story = {
  args: {},
};
