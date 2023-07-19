import type { Meta, StoryObj } from "@storybook/react";
import { navigationApp } from "@/app/config/roteConfig";
import { Navigation as NavigationComponent } from "./Navigation";

const meta: Meta<typeof NavigationComponent> = {
  title: "widgets/Navigation",
  component: NavigationComponent,
  tags: ["widgets"],
  args: { navigationApp },
};

export default meta;
type Story = StoryObj<typeof NavigationComponent>;

export const Navigation: Story = { args: {} };
