import type { Meta, StoryObj } from "@storybook/react";
import { navigationApp } from "app/config/roteConfig";
import { LogIn as LogInComponent } from "./LogIn";

const meta: Meta<typeof LogInComponent> = {
  title: "widgets/LogIn",
  component: LogInComponent,
  tags: ["widgets"],
  args: { navigationApp },
};

export default meta;
type Story = StoryObj<typeof LogInComponent>;

export const LogIn: Story = { args: {} };
