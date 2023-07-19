import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import AdminPanelPageComponent from "./AdminPanelPage";

const meta = {
  title: "pages/AdminPanelPage",
  component: AdminPanelPageComponent,
  tags: ["pages"],
  args: {},
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof AdminPanelPageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AdminPanelPage: Story = {
  args: {},
};
