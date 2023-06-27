import type { Meta, StoryObj } from "@storybook/react";
import { navigationApp } from "app/config/roteConfig";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Header as HeaderComponent } from "./Header";

const meta: Meta<typeof HeaderComponent> = {
  title: "widgets/Header",
  component: HeaderComponent,
  tags: ["widgets"],
  args: { navigationApp },
};

export default meta;
type Story = StoryObj<typeof HeaderComponent>;

export const HeaderWithoutUser: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: {
        authData: null,
      },
    }),
  ],
};

export const HeaderWithLoginUser: Story = {
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
