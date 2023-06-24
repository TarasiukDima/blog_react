import type { Meta, StoryObj } from "@storybook/react";
import { ErrorPage as ErrorPageComponent } from "./ErrorPage";

const meta: Meta<typeof ErrorPageComponent> = {
  title: "pages/ErrorPage",
  component: ErrorPageComponent,
  tags: ["pages"],
};

export default meta;
type Story = StoryObj<typeof ErrorPageComponent>;

export const ErrorPage: Story = { args: {} };
