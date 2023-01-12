import { CSSProperties } from "react";

export type FlexContainerProps = { inlineFlex?: boolean } & Pick<
  CSSProperties,
  "justifyContent" | "alignContent" | "gap" | "flexDirection"
>;

export type FlexChildProps = Pick<
  CSSProperties,
  "order" | "flexGrow" | "flexShrink" | "flexBasis" | "alignSelf" | "flex"
>;
