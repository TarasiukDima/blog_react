import { ReactNode, memo } from "react";
import { Flex, IFlexProps } from "../Flex/ui/Flex";

type THStackProps = Omit<IFlexProps, "direction">;

export const HStack = (props: THStackProps) => {
  return <Flex {...props} direction="row" />;
};
