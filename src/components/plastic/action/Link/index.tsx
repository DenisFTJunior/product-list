import styled from "@emotion/styled";
import { resetSpacingStyles } from "../../../../toolbox/style/resetSpacingStyles";
import { ColorWithHoverProps } from "../../../../toolbox/style/types/color";
import { SpacingProps } from "../../../../toolbox/style/types/spacing";
import { SizeProps } from "../../../../toolbox/style/types/size";
import { appendStyle } from "../../../../toolbox/helpers/appendStyle";
import {  Link as _Link } from "react-router-dom";

export type StyleProps = Partial<
  ColorWithHoverProps & SpacingProps & SizeProps
>;

export const Link = styled(_Link)(
  ({
    hoverColors,
    height,
    width,
    padding,
    backgroundColor,
    color,
    borderColor,
    margin,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
  }: StyleProps) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    ...resetSpacingStyles,
    width: width || "min-content",
    height: height || "min-content",
    padding: padding || "0.5rem 1rem",
    textDecoration: "none",
    "&:hover": {
      ...hoverColors,
    },
    backgroundColor: backgroundColor || "transparent",
    ...appendStyle({
      color,
      borderColor,
      margin,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
    }),
  })
);
