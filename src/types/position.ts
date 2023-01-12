import { CSSProperties } from "react";

export type PositionProps = Pick<
  CSSProperties,
  "position" | "top" | "bottom" | "left" | "right" | "zIndex"
>;
