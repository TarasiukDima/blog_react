import type { Meta, StoryObj } from "@storybook/react";
import { ButtonSize } from "@/shared/const/common";
import LoginIcon from "@/shared/assets/icons/login.svg";
import { Button as ButtonComponent, VariantButton } from "./Button";

const meta: Meta<typeof ButtonComponent> = {
  title: "shared/Button",
  component: ButtonComponent,
  tags: ["shared"],
  args: {
    size: ButtonSize.M,
  },
};

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const WithoutStyles: Story = {
  args: {
    children: "Button without styles",
    variant: VariantButton.CLEAR,
  },
};

export const Standard: Story = {
  args: {
    children: "Button",
    variant: VariantButton.STANDARD,
  },
};

export const Rounded: Story = {
  args: {
    children: "Button",
    variant: VariantButton.ROUNDED,
  },
};

export const ForIcons: Story = {
  args: {
    children: <LoginIcon />,
    variant: VariantButton.ICON_BUTTON,
  },
};

export const Disabled: Story = {
  args: {
    children: "Button without styles",
    disabled: true,
    variant: VariantButton.STANDARD,
  },
};
