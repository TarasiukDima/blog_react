import type { Meta, StoryObj } from "@storybook/react";
import { ButtonSize } from "shared/types";
import { Button as ButtonComponent, VariantButton } from "./Button";

const meta: Meta<typeof ButtonComponent> = {
  title: "shared/Button",
  component: ButtonComponent,
  tags: ["shared"],
};

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const ButtonWithoutStyles: Story = {
  args: {
    children: "Link without styles",
    variant: VariantButton.CLEAR,
    size: ButtonSize.M,
  },
};

export const ButtonStandart: Story = {
  args: {
    children: "Link in text",
    variant: VariantButton.STANDARD,
    size: ButtonSize.M,
  },
};

export const ButtonRounded: Story = {
  args: {
    children: "Link in text",
    variant: VariantButton.ROUNDED,
    size: ButtonSize.M,
  },
};

export const ButtonForIcons: Story = {
  args: {
    children: "",
    variant: VariantButton.ICON_BUTTON,
    size: ButtonSize.M,
  },
};
