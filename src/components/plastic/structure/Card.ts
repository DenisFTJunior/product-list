import { CSSProperties } from "react";
import styled from "@emotion/styled";
import { GREEN } from "../../../toolbox/constants/colors";
import { appendStyle } from "../../../toolbox/helpers/appendStyle";
import { SizeProps } from "../../../toolbox/style/types/size";
import { SpacingProps } from "../../../toolbox/style/types/spacing";
import {
  Breakpoints,
  handleBreakpoints,
} from "../../../toolbox/style/handleBreakpoints";

type CardProps = Partial<SizeProps & { shadowColor: string }> &
  Pick<CSSProperties, "border" | "background" | "borderRadius"> &
  SpacingProps;
export const Card = styled.div(
  ({
    width,
    height,
    shadowColor,
    border,
    background,
    margin,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    padding,
    borderRadius,
    md,
    sm,
  }: CardProps & Breakpoints<Partial<CardProps>>) => ({
    width: width || "100%",
    height: height || "100%",
    boxShadow: `0px 4px 4px ${shadowColor || GREEN}25`,
    border: border || "none",
    ...appendStyle({
      borderRadius,
      background,
      margin,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      padding,
    }),
    ...handleBreakpoints({ md, sm }),
  })
);
