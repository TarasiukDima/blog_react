import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton as SkeletonComponent } from "./Skeleton";

const meta: Meta<typeof SkeletonComponent> = {
  title: "shared/Skeleton",
  component: SkeletonComponent,
  tags: ["shared"],
};

export default meta;
type Story = StoryObj<typeof SkeletonComponent>;

export const SkeletonCircle: Story = {
  args: {
    type: "circle",
    width: 150,
    height: 150,
  },
};

export const SkeletonSquare: Story = {
  args: {
    type: "square",
    height: 150,
  },
};
