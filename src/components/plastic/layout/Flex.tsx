import styled from "@emotion/styled";
import { appendStyle } from "../../../toolbox/helpers/appendStyle";
import {
  FlexChildProps,
  FlexContainerProps,
} from "../../../toolbox/style/types/flex";

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
  ({
    flex,
    alignSelf,
    flexBasis,
    flexGrow,
    flexShrink,
    order,
  }: Partial<FlexChildProps>) => ({
    flex: flex || "1",
    ...appendStyle({
      alignSelf,
      flexBasis,
      flexGrow,
      flexShrink,
      order,
    }),
  })
);
