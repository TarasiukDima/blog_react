import { Meta, StoryObj } from "@storybook/react";
import { Span as SpanComponent } from "./Span";

const meta: Meta<typeof SpanComponent> = {
  title: "shared/Span",
  component: SpanComponent,
  tags: ["shared"],
};

export default meta;
type Story = StoryObj<typeof SpanComponent>;

export const Primary: Story = {
  args: {
    children: "Description Description Description Description",
  },
};
