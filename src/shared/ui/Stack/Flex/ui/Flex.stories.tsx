import type { Meta, StoryObj } from "@storybook/react";
import { Flex as FlexComponent } from "./Flex";

const meta = {
  title: "shared/Flex",
  component: FlexComponent,
  tags: ["shared"],
  args: {
    children: (
      <>
        {" "}
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
      </>
    ),
  },
} satisfies Meta<typeof FlexComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RowStart: Story = {
  args: {
    direction: "row",
  },
};

export const RowCenter: Story = {
  args: {
    direction: "row",
    justify: "center",
  },
};

export const RowEnd: Story = {
  args: {
    direction: "row",
    justify: "end",
  },
};

export const ColumnStart: Story = {
  args: {
    direction: "column",
    justify: "center",
    align: "start",
    allWidth: true,
  },
};

export const ColumnCenter: Story = {
  args: {
    direction: "column",
  },
};

export const ColumnEnd: Story = {
  args: {
    direction: "column",
    justify: "center",
    align: "end",
    allWidth: true,
  },
};
