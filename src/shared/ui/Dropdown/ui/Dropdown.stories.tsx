import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Avatar } from "shared/ui/Avatar";
import { Dropdown as DropdownComponent } from "./Dropdown";

const meta: Meta<typeof DropdownComponent> = {
  title: "shared/Dropdown",
  component: DropdownComponent,
  tags: ["shared"],
  args: {
    open: true,
    trigger: "Dropdown menu button",
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
  decorators: [
    (Story) => (
      <div style={{ padding: "220px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DropdownComponent>;

export const Primary: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    readonly: true,
    open: false,
  },
};

export const LikeButtonWithIcon: Story = {
  args: {
    trigger: (
      <Avatar src="https://e7.pngegg.com/pngimages/139/726/png-clipart-graphics-computer-icons-user-illustration-man-at-computer-blue-electric-blue.png" />
    ),
    roundedTrigger: true,
  },
};

export const BottomRightMenu: Story = {
  args: {
    trigger: (
      <Avatar src="https://e7.pngegg.com/pngimages/139/726/png-clipart-graphics-computer-icons-user-illustration-man-at-computer-blue-electric-blue.png" />
    ),
    roundedTrigger: true,
    direction: "bottom right",
  },
};

export const TopLeftMenu: Story = {
  args: {
    trigger: (
      <Avatar src="https://e7.pngegg.com/pngimages/139/726/png-clipart-graphics-computer-icons-user-illustration-man-at-computer-blue-electric-blue.png" />
    ),
    roundedTrigger: true,
    direction: "top left",
  },
};

export const TopRightMenu: Story = {
  args: {
    trigger: (
      <Avatar src="https://e7.pngegg.com/pngimages/139/726/png-clipart-graphics-computer-icons-user-illustration-man-at-computer-blue-electric-blue.png" />
    ),
    roundedTrigger: true,
    direction: "top right",
  },
};
