import type { Meta, StoryObj } from "@storybook/react";
import AboutPageComponent from "./AboutPage";

const meta: Meta<typeof AboutPageComponent> = {
  title: "pages/AboutPage",
  component: AboutPageComponent,
  tags: ["pages"],
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};

export default meta;
type Story = StoryObj<typeof AboutPageComponent>;

export const AboutPage: Story = { args: {} };
