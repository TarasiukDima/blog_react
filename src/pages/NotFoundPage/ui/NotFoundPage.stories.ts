import type { Meta, StoryObj } from "@storybook/react";
import { NotFoundPage as NotFoundPageComponent } from "./NotFoundPage";

const meta: Meta<typeof NotFoundPageComponent> = {
  title: "pages/NotFoundPage",
  component: NotFoundPageComponent,
  tags: ["pages"],
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};

export default meta;
type Story = StoryObj<typeof NotFoundPageComponent>;

export const NotFoundPage: Story = { args: {} };
