import type { Meta, StoryObj } from "@storybook/react";
import { navigationApp } from "app/config/roteConfig";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { LogIn as LogInComponent } from "./LogIn";

const meta: Meta<typeof LogInComponent> = {
  title: "widgets/LogIn",
  component: LogInComponent,
  tags: ["widgets"],
  args: { navigationApp },
};

export default meta;
type Story = StoryObj<typeof LogInComponent>;

export const LogIn: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: {
        authData: null,
      },
    }),
  ],
};

export const LogInWithUserExist: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: "1",
          username: "admin",
        },
      },
    }),
  ],
};
