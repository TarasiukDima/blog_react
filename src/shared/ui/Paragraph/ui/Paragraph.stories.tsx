import { Meta, StoryObj } from "@storybook/react";
import { Paragraph as ParagraphComponent } from "./Paragraph";

const meta: Meta<typeof ParagraphComponent> = {
  title: "shared/Paragraph",
  component: ParagraphComponent,
  tags: ["shared"],
};

export default meta;
type Story = StoryObj<typeof ParagraphComponent>;

export const Paragraph: Story = {
  args: {
    children: "Description Description Description Description",
  },
};
