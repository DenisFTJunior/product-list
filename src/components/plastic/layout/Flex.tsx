import styled from "@emotion/styled";
import { FlexChildProps, FlexContainerProps } from "../../../types/flex";

export const Flex = styled.div(
  ({
    alignContent,
    flexDirection,
    gap,
    justifyContent,
    inlineFlex,
  }: Partial<FlexContainerProps>) => ({
    display: inlineFlex ? "inline-flex" : "flex",
    alignContent: alignContent || "center",
    flexDirection: flexDirection || "row",
    justifyContent: justifyContent || "center",
    gap,
  })
);

export const FlexItem = styled.div(
  ({ flex, ...rest }: Partial<FlexChildProps>) => ({
    flex: "1",
    ...rest,
  })
);
