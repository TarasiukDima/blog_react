import type { Meta, StoryObj } from "@storybook/react";
import { Title as TitleComponent } from "./Title";

const meta: Meta<typeof TitleComponent> = {
  title: "shared/Title",
  component: TitleComponent,
  tags: ["shared"],
};

export default meta;
type Story = StoryObj<typeof TitleComponent>;

const text = "Text title.";

export const h1: Story = {
  args: {
    Tag: "h1",
    children: text,
  },
};

export const h2: Story = {
  args: {
    Tag: "h2",
    children: text,
  },
};

export const h3: Story = {
  args: {
    Tag: "h3",
    children: text,
  },
};

export const h4: Story = {
  args: {
    Tag: "h4",
    children: text,
  },
};

export const h5: Story = {
  args: {
    Tag: "h5",
    children: text,
  },
};

export const h6: Story = {
  args: {
    Tag: "h6",
    children: text,
  },
};
