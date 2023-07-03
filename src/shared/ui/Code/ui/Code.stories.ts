import type { Meta, StoryObj } from "@storybook/react";
import { Code as CodeComponent } from "./Code";

const meta: Meta<typeof CodeComponent> = {
  title: "shared/Code",
  component: CodeComponent,
  tags: ["shared"],
};

export default meta;
type Story = StoryObj<typeof CodeComponent>;

export const Code: Story = {
  args: {
    text: `
    @import "shared/styles/variables";
    @import "shared/styles/mixins";

    .Code {
    }
    `,
  },
};
