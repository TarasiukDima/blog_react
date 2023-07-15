import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Tabs as TabsComponent } from "./Tabs";

const meta: Meta<typeof TabsComponent> = {
  title: "shared/Tabs",
  component: TabsComponent,
  tags: ["shared"],
};

export default meta;
type Story = StoryObj<typeof TabsComponent>;

export const Tabs: Story = {
  args: {
    tabs: [
      {
        value: "tab 1",
        content: "tab 1 content",
      },
      {
        value: "tab 2",
        content: "tab 2 content",
      },
      {
        value: "tab 3",
        content: "tab 3 content",
      },
      {
        value: "tab 4",
        content: "tab 4 content",
      },
    ],
    valueActive: "tab 2",
    onTabClick: action("onTabClick"),
  },
};
