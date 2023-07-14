import { ReactNode, memo } from "react";
import { Flex, IFlexProps } from "../Flex/ui/Flex";

type TVStackProps = Omit<IFlexProps, "direction">;

export const VStack = (props: TVStackProps) => {
  return <Flex {...props} direction="row" />;
};
