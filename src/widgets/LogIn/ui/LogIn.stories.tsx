import type { Meta, StoryObj } from "@storybook/react";
import { navigationApp } from "@/app/config/roteConfig";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { WrapDecorator } from "@/shared/config/storybook/WrapDecorator/WrapDecorator";
import { userMockInitial } from "@/shared/lib/tests/mocks/mockData/mockData";
import { LogIn as LogInComponent } from "./LogIn";

const meta: Meta<typeof LogInComponent> = {
  title: "widgets/LogIn",
  component: LogInComponent,
  tags: ["widgets"],
  args: { navigationApp },
  decorators: [WrapDecorator("50px")],
};

export default meta;
type Story = StoryObj<typeof LogInComponent>;

export const WithoutUser: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: {
        authData: null,
      },
    }),
  ],
};

export const WithUser: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: userMockInitial,
    }),
  ],
};
