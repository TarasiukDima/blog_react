import type { Meta, StoryObj } from "@storybook/react";
import AvatarImg from "shared/assets/test/avatar.png";
import { Avatar as AvatarComponent } from "./Avatar";

const meta: Meta<typeof AvatarComponent> = {
  title: "shared/Avatar",
  component: AvatarComponent,
  tags: ["shared"],
};

export default meta;
type Story = StoryObj<typeof AvatarComponent>;

export const AvatarDefault: Story = {
  args: {
    src: AvatarImg,
    alt: "image",
  },
};
export const AvatarWithSize: Story = {
  args: {
    src: AvatarImg,
    alt: "image",
    size: 150,
  },
};
