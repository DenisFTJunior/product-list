import { CSSProperties } from "react";

export type SizeProps = Pick<
  CSSProperties,
  "width" | "maxWidth" | "minWidth" | "height" | "maxHeight" | "minHeight"
>;
