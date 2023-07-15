import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Currency } from "entities/Currency";
import { Countries } from "entities/Countries";
import { EditableProfileCard } from "./EditableProfileCard";

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

const initialUserState = {
  user: {
    _inited: true,
    authData: { id: userData.id }
  },
};

const meta = {
  title: "features/EditableProfileCard",
  component: EditableProfileCard,
  tags: ["features"],
  args: {
    id: "1",
  },
  decorators: [
    StoreDecorator({
      profile: { ...profileInitial },
      ...initialUserState,
    }),
  ],
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Readonly: Story = {
  args: {},
};

export const CanEdit: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      profile: { ...profileInitial, readonly: false },
      ...initialUserState,
    }),
  ],
};
