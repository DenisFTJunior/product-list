import { CSSProperties } from "react";

export const appendStyle = (style: CSSProperties) =>
  Object.entries(style)
    .filter(([_, value]) => value !== undefined)
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
