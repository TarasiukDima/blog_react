import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Currency } from "../../../entities/Currency";
import { Countries } from "../../../entities/Countries";
import ProfilePageComponent from "./ProfilePage";

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

const userData = {
  id: "1",
  first: "User",
  lastname: "Userov",
  age: 91,
  currency: Currency.EUR,
  country: Countries.Belarus,
  city: "Brest",
  username: "admin",
};

const profileInitial = {
  isLoading: false,
  error: "",
  form: userData,
  readonly: true,
  data: userData,
};

const userInitialState = {
  user: {
    _inited: true,
    authData: { id: userData.id },
  },
};

export default meta;
type Story = StoryObj<typeof ProfilePageComponent>;

export const ProfilePage: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      profile: profileInitial,
      ...userInitialState,
    }),
  ],
};
