import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import {
  profileMockInitial,
  userMockInitial,
} from "@/shared/lib/tests/mocks/mockData/mockData";
import { EditableProfileCard } from "./EditableProfileCard";

const meta = {
  title: "features/EditableProfileCard",
  component: EditableProfileCard,
  tags: ["features"],
  args: {
    id: "1",
  },
  decorators: [
    StoreDecorator({
      profile: profileMockInitial,
      user: userMockInitial,
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
      profile: { ...profileMockInitial, readonly: false },
      user: userMockInitial,
    }),
  ],
};
