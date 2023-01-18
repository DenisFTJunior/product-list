import { CSSProperties } from "react";
import { SizeProps } from "./size";
import { SpacingProps } from "./spacing";

export type FlexContainerProps = { inlineFlex?: boolean } & SizeProps & SpacingProps & Pick<
  CSSProperties,
  "justifyContent" | "alignItems" | "gap" | "flexDirection"
>;

export type FlexChildProps = Pick<
  CSSProperties,
  "order" | "flexGrow" | "flexShrink" | "flexBasis" | "alignSelf" | "flex"
> & SizeProps & SpacingProps;
