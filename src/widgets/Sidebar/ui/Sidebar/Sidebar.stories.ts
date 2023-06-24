import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar as SidebarComponent } from "./Sidebar";

const meta: Meta<typeof SidebarComponent> = {
  title: "widgets/Sidebar",
  component: SidebarComponent,
  tags: ["widgets"],
};

export default meta;
type Story = StoryObj<typeof SidebarComponent>;

export const Sidebar: Story = { args: {} };
