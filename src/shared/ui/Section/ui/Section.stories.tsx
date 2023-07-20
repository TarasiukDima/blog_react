import { Meta, StoryObj } from "@storybook/react";
import { Section as SectionComponent } from "./Section";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof SectionComponent> = {
  title: "shared/Section",
  component: SectionComponent,
  tags: ["shared"],
  args: {
    children: "Section content",
  },
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof SectionComponent>;

export const Section: Story = {
  args: {},
};
