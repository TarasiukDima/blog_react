import { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import LoginFormComponent from "./LoginForm";

const meta: Meta<typeof LoginFormComponent> = {
  title: "features/LoginForm",
  component: LoginFormComponent,
  tags: ["features"],
};

export default meta;
type Story = StoryObj<typeof LoginFormComponent>;

export const Primary: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { username: "123", password: "asd" },
    }),
  ],
};

export const WithError: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { username: "123", password: "asd", error: "ERROR" },
    }),
  ],
};

export const Loading: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { isLoading: true },
    }),
  ],
};
