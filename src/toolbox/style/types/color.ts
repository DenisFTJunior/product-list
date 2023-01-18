import { CSSProperties } from "react";

export type ColorProps = Pick<
  CSSProperties,
  "color" | "background" | "borderColor" | "backgroundColor"
>;

export type ColorWithHoverProps = ColorProps & { hoverColors?: ColorProps };
