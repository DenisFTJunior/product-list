import styled from "@emotion/styled";
import { appendStyle } from "../../../toolbox/helpers/appendStyle";
import {
  Breakpoints,
  handleBreakpoints,
} from "../../../toolbox/style/handleBreakpoints";
import {
  FlexChildProps,
  FlexContainerProps,
} from "../../../toolbox/style/types/flex";

export const Flex = styled.div(
  ({
    alignItems,
    flexDirection,
    gap,
    justifyContent,
    inlineFlex,
    md,
    sm,
  }: Partial<FlexContainerProps> &
    Breakpoints<Partial<FlexContainerProps>>) => ({
    width: "100%",
    height: "100%",
    display: inlineFlex ? "inline-flex" : "flex",
    alignItems: alignItems || "center",
    flexDirection: flexDirection || "row",
    justifyContent: justifyContent || "center",
    gap: gap || "10px",
    ...handleBreakpoints({ md, sm }),
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
    md,
    sm,
  }: Partial<FlexChildProps> & Breakpoints<Partial<FlexChildProps>>) => ({
    flex: flex || "1",
    ...appendStyle({
      alignSelf,
      flexBasis,
      flexGrow,
      flexShrink,
      order,
    }),
    ...handleBreakpoints({ md, sm }),
  })
);
