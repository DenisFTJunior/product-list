import { CSSProperties } from "react";

export type ColorProps = Pick<
  CSSProperties,
  "color" | "backgroundColor" | "borderColor"
>;

export type ColorWithHoverProps = ColorProps & { hoverColors?: ColorProps };
