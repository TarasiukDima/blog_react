import type { Meta, StoryObj } from "@storybook/react";
import AvatarIcon from "shared/assets/test/avatar.png";
import { Currency } from "../../../../entities/Currency";
import { Countries } from "../../../../entities/Countries";
import { ProfileCard as ProfileCardComponent } from "./ProfileCard";

const meta: Meta<typeof ProfileCardComponent> = {
  title: "entities/ProfileCard",
  component: ProfileCardComponent,
  tags: ["pages"],
};

export default meta;
type Story = StoryObj<typeof ProfileCardComponent>;

const userData = {
  first: "User",
  lastname: "Userov",
  age: 91,
  currency: Currency.RUB,
  country: Countries.Belarus,
  city: "Brest",
  username: "admin",
  avatar: AvatarIcon as string,
};

export const WithDataCanEdit: Story = {
  args: {
    readonly: false,
    isLoading: false,
    data: userData,
    error: "",
  },
};

export const Readonly: Story = {
  args: {
    readonly: true,
    isLoading: false,
    data: userData,
    error: "",
  },
};

export const Loading: Story = {
  args: {
    readonly: false,
    isLoading: true,
    data: null,
    error: "",
  },
};

export const WithError: Story = {
  args: {
    readonly: false,
    isLoading: false,
    data: null,
    error: "Error",
  },
};
