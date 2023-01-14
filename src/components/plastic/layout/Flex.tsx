import styled from "@emotion/styled";
import { FlexChildProps, FlexContainerProps } from "../../../toolbox/style/types/flex";

export const Flex = styled.div(
  ({
    alignContent,
    flexDirection,
    gap,
    justifyContent,
    inlineFlex,
  }: Partial<FlexContainerProps>) => ({
    width: "100%",
    height: "100%",
    display: inlineFlex ? "inline-flex" : "flex",
    alignContent: alignContent || "center",
    flexDirection: flexDirection || "row",
    justifyContent: justifyContent || "center",
    gap: gap || "10px",
  })
);

export const FlexItem = styled.div(
  ({ flex, ...rest }: Partial<FlexChildProps>) => ({
    flex: "1",
    ...rest,
  })
);
