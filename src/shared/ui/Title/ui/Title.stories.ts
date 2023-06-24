import type { Meta, StoryObj } from "@storybook/react";
import { Title as TitleComponent } from "./Title";

const meta: Meta<typeof TitleComponent> = {
  title: "shared/Title",
  component: TitleComponent,
  tags: ["shared"],
};

export default meta;
type Story = StoryObj<typeof TitleComponent>;

export const Title: Story = {
  args: {
    Tag: "h1",
    className: "",
    children: "Text title.",
  },
};
