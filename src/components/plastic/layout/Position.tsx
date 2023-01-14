import styled from "@emotion/styled";
import { appendStyle } from "../../../toolbox/helpers/appendStyle";
import { PositionProps } from "../../../toolbox/style/types/position";
import { SizeProps } from "../../../toolbox/style/types/size";

export const Position = styled.div(
  ({
    bottom,
    left,
    position,
    right,
    top,
    zIndex,
    height,
    width,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
  }: Partial<PositionProps & SizeProps>) => ({
    zIndex: zIndex || 0,
    position: position || "static",
    width: width || "100%",
    height: height || "100%",
    ...appendStyle({
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      right,
      top,
      bottom,
      left,
    }),
  })
);
