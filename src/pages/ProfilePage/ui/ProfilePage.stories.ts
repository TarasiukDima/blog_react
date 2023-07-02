import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import AvatarIcon from "shared/assets/test/avatar.png";
import { Currency } from "../../../entities/Currency";
import { Countries } from "../../../entities/Countries";
import { IProfile } from "../../../entities/Profile";
import ProfilePageComponent from "./ProfilePage";

const meta: Meta<typeof ProfilePageComponent> = {
  title: "pages/ProfilePage",
  component: ProfilePageComponent,
  tags: ["pages"],
  args: {},
};

export default meta;
type Story = StoryObj<typeof ProfilePageComponent>;

const userData: IProfile = {
  first: "User",
  lastname: "Userov",
  age: 91,
  currency: Currency.RUB,
  country: Countries.Belarus,
  city: "Brest",
  username: "admin",
  avatar: AvatarIcon,
};

export const ProfilePage: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        readonly: false,
        isLoading: false,
        error: "",
        data: userData,
        form: userData,
      },
    }),
  ],
};
