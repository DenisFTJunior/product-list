import styled from "@emotion/styled";
import { resetSpacingStyles } from "../../../../toolbox/style/resetSpacingStyles";
import { ColorWithHoverProps } from "../../../../types/color";
import { SpacingProps } from "../../../../types/spacing";
import { SizeProps } from "../../../../types/size";

export type StyleProps = Partial<
  ColorWithHoverProps & SpacingProps & SizeProps
>;

export const Link = styled.a(
  ({ color, hoverColors, height, width, padding, ...rest }: StyleProps) => ({
    ...resetSpacingStyles,
    width: width || "min-content",
    height: height || "min-content",
    padding: padding || "0.5rem 1rem",
    textDecoration: "none",
    "&:hover": {
      ...hoverColors,
    },
    ...rest,
  })
);
