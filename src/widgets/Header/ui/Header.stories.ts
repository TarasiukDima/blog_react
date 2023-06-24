import type { Meta, StoryObj } from "@storybook/react";
import { navigationApp } from "app/config/roteConfig";
import { Header as HeaderComponent } from "./Header";

const meta: Meta<typeof HeaderComponent> = {
  title: "widgets/Header",
  component: HeaderComponent,
  tags: ["widgets"],
  args: { navigationApp },
};

export default meta;
type Story = StoryObj<typeof HeaderComponent>;

export const Header: Story = { args: {} };
