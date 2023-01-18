import { CSSProperties } from "react";
import styled from "@emotion/styled";
import { ALMOST_BLACK, BLUE, GREEN } from "../../../toolbox/constants/colors";
import { appendStyle } from "../../../toolbox/helpers/appendStyle";
import { SizeProps } from "../../../toolbox/style/types/size";
import { SpacingProps } from "../../../toolbox/style/types/spacing";
import {
  Breakpoints,
  handleBreakpoints,
} from "../../../toolbox/style/handleBreakpoints";

type InputProps = {
  border?: string;
} & SizeProps &
  Pick<CSSProperties, "backgroundColor" | "fontSize" | "color"> &
  SpacingProps;

export const Input = styled.input(
  ({
    border,
    height,
    margin,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    padding,
    width,
    backgroundColor,
    color,
    fontSize,
    sm,
    md,
  }: InputProps & Breakpoints<InputProps>) => ({
    border: border || `1px solid ${BLUE}`,
    borderRadius: "10px",
    backgroundColor: backgroundColor || "transparent",
    fontSize: fontSize || "16px",
    color: color || ALMOST_BLACK,
    "&:focus": {
      border: `1px solid ${GREEN}`,
    },
    "&::selection": {
      border: `1px solid ${GREEN}`,
    },
    ...appendStyle({
      height,
      margin,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      padding,
      width,
    }),

    ...handleBreakpoints({ sm, md }),
  })
);
