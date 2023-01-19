import styled from "@emotion/styled";
import { appendStyle } from "../../../toolbox/helpers/appendStyle";
import {
  Breakpoints,
  handleBreakpoints,
} from "../../../toolbox/style/handleBreakpoints";
import { SizeProps } from "../../../toolbox/style/types/size";
import { SpacingProps } from "../../../toolbox/style/types/spacing";

type BoxProps = SizeProps & SpacingProps;

export const Box = styled.div(
  ({
    height,
    width,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    padding,
    margin,
    sm,
    md,
  }: BoxProps & Breakpoints<BoxProps>) => ({
    ...appendStyle({
      height,
      width,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      padding,
      margin,
    }),
    ...handleBreakpoints({
      sm,
      md,
    }),
  })
);
