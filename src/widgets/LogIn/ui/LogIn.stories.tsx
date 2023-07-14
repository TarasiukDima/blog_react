import type { Meta, StoryObj } from "@storybook/react";
import { navigationApp } from "app/config/roteConfig";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { LogIn as LogInComponent } from "./LogIn";

const meta: Meta<typeof LogInComponent> = {
  title: "widgets/LogIn",
  component: LogInComponent,
  tags: ["widgets"],
  args: { navigationApp },
  render: (args) => {
    return (
      <div style={{ padding: "50px" }}>
        <LogInComponent {...args} />
      </div>
    );
  },
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
          avatar:
            "https://e7.pngegg.com/pngimages/139/726/png-clipart-graphics-computer-icons-user-illustration-man-at-computer-blue-electric-blue.png",
        },
      },
    }),
  ],
};
