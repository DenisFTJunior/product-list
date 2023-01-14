import styled from "@emotion/styled";
import { resetSpacingStyles } from "../../../../toolbox/style/resetSpacingStyles";
import { CSSProperties } from "react";
import { ColorWithHoverProps } from "../../../../toolbox/style/types/color";
import { SpacingProps } from "../../../../toolbox/style/types/spacing";

export type StyleProps = Pick<
  CSSProperties,
  "borderRadius" | "width" | "height" | "border"
> &
  ColorWithHoverProps &
  SpacingProps;
export const StyledButton = styled.button(
  ({
    backgroundColor,
    borderColor,
    borderRadius,
    color,
    height,
    hoverColors,
    margin,
    padding,
    width,
  }: StyleProps) => ({
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    ...resetSpacingStyles,
    width: width || "min-content",
    padding: padding || "0.5rem 1rem",
    textAlign: "center",
    margin,
    backgroundColor,
    borderColor,
    borderRadius,
    color,
    height,
    "&:hover": {
      ...hoverColors,
    },
  })
);
