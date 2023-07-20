import type { Meta, StoryObj } from "@storybook/react";
import { userMockData } from "@/shared/lib/tests/mocks/mockData/mockData";
import { ProfileCard as ProfileCardComponent } from "./ProfileCard";

const meta: Meta<typeof ProfileCardComponent> = {
  title: "entities/ProfileCard",
  component: ProfileCardComponent,
  tags: ["pages"],
};

export default meta;
type Story = StoryObj<typeof ProfileCardComponent>;

export const WithDataCanEdit: Story = {
  args: {
    readonly: false,
    isLoading: false,
    data: userMockData,
    error: "",
  },
};

export const Readonly: Story = {
  args: {
    readonly: true,
    isLoading: false,
    data: userMockData,
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
