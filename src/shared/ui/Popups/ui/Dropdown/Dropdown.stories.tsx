import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Avatar } from "@/shared/ui/Avatar";
import { WrapDecorator } from "@/shared/config/storybook/WrapDecorator/WrapDecorator";
import { Dropdown as DropdownComponent } from "./Dropdown";

const meta: Meta<typeof DropdownComponent> = {
  title: "shared/Dropdown",
  component: DropdownComponent,
  tags: ["shared"],
  args: {
    open: true,
    trigger: (
      <Avatar src="https://e7.pngegg.com/pngimages/139/726/png-clipart-graphics-computer-icons-user-illustration-man-at-computer-blue-electric-blue.png" />
    ),
    roundedTrigger: true,
    items: [
      { id: 1, content: "this is the link 1", href: "#" },
      { id: 2, content: "this is the link 2", href: "#" },
      {
        id: 3,
        content: "this is the button 3",
        onClick: action("Dropdown change"),
      },
      {
        id: 4,
        content: "this is the disabled button 4",
        disabled: true,
      },
      { id: 5, content: "this is the link 5", href: "#" },
    ],
  },
  decorators: [WrapDecorator("220px")],
};

export default meta;
type Story = StoryObj<typeof DropdownComponent>;

export const Primary: Story = {
  args: {
    trigger: "Dropdown menu button",
    roundedTrigger: false,
  },
};

export const Disabled: Story = {
  args: {
    trigger: "Dropdown menu button",
    roundedTrigger: false,
    readonly: true,
    open: false,
  },
};

export const LikeButtonWithIcon: Story = {
  args: {
    roundedTrigger: true,
  },
};

export const BottomRightMenu: Story = {
  args: {
    roundedTrigger: true,
    direction: "bottom right",
  },
};

export const TopLeftMenu: Story = {
  args: {
    roundedTrigger: true,
    direction: "top left",
  },
};

export const TopRightMenu: Story = {
  args: {
    roundedTrigger: true,
    direction: "top right",
  },
};
