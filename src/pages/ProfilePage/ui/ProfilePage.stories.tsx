import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ProfilePageComponent from "./ProfilePage";
import {
  profileMockInitial,
  userMockInitial,
} from "@/shared/lib/tests/mocks/mockData/mockData";

const meta: Meta<typeof ProfilePageComponent> = {
  title: "pages/ProfilePage",
  component: ProfilePageComponent,
  tags: ["pages"],
  args: {},
  parameters: {
    reactRouter: {
      routePath: "/profile/:id",
      routeParams: { id: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProfilePageComponent>;

export const ProfilePage: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      profile: profileMockInitial,
      user: userMockInitial,
    }),
  ],
};
