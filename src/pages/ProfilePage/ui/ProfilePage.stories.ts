import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import ProfilePageComponent from "./ProfilePage";

const meta: Meta<typeof ProfilePageComponent> = {
  title: "pages/ProfilePage",
  component: ProfilePageComponent,
  tags: ["pages"],
};

export default meta;
type Story = StoryObj<typeof ProfilePageComponent>;

export const ProfilePage: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        readonly: false,
        isLoading: false,
        data: null,
        error: "",
      },
    }),
  ],
};
