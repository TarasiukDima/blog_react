import type { Meta, StoryObj } from "@storybook/react";

import { ButtonSize } from "shared/types";
import { AppLink as AppLinkComponent, VariantLink } from "./AppLink";

const meta: Meta<typeof AppLinkComponent> = {
  title: "shared/AppLink",
  component: AppLinkComponent,
  tags: ["shared"],
  args: { to: "/" },
};

export default meta;
type Story = StoryObj<typeof AppLinkComponent>;

export const AppLinkWithoutStyles: Story = {
  args: {
    children: "Link without styles",
    variant: VariantLink.CLEAR,
  },
};

export const AppLinkText: Story = {
  args: {
    children: "Link in text",
    variant: VariantLink.TEXT_LINK,
  },
};

export const AppLinkLikeButton: Story = {
  args: {
    children: "Link button",
    variant: VariantLink.BUTTON_LINK,
    size: ButtonSize.M,
  },
};

export const AppLinkLikeIcon: Story = {
  args: {
    children: "Link button",
    variant: VariantLink.ICON_LINK,
  },
};
