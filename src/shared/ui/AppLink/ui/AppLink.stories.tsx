import type { Meta, StoryObj } from "@storybook/react";
import LoginIcon from "@/shared/assets/icons/login.svg";
import { ButtonSize } from "@/shared/const/common";
import { AppLink as AppLinkComponent, VariantLink } from "./AppLink";

const meta: Meta<typeof AppLinkComponent> = {
  title: "shared/AppLink",
  component: AppLinkComponent,
  tags: ["shared"],
  args: { to: "/" },
};

export default meta;
type Story = StoryObj<typeof AppLinkComponent>;

export const WithoutStyles: Story = {
  args: {
    children: "Link without styles",
    variant: VariantLink.CLEAR,
  },
};

export const Text: Story = {
  args: {
    children: "Link in text",
    variant: VariantLink.TEXT_LINK,
  },
};

export const LikeButton: Story = {
  args: {
    children: "Link button",
    variant: VariantLink.BUTTON_LINK,
    size: ButtonSize.M,
  },
};

export const LikeIcon: Story = {
  args: {
    children: <LoginIcon />,
    variant: VariantLink.ICON_LINK,
  },
};
