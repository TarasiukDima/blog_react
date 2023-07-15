import { StoryFn } from "@storybook/react";

export const WrapDecorator =
  (padding: string) => (StoryComponent: StoryFn, context: any) => {
    return (
      <div
        style={{
          padding,
        }}
      >
        <StoryComponent />
      </div>
    );
  };
