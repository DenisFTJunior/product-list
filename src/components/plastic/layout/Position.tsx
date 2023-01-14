import styled from "@emotion/styled";
import { PositionProps } from "../../../toolbox/style/types/position";

export const Position = styled.div(
  ({ bottom, left, position, right, top, zIndex }: Partial<PositionProps>) => ({
    zIndex: zIndex || 0,
    position: position || "static",
    top: top || "0",
    right: right || "0",
    bottom: bottom || "0",
    left: left || "0",
  })
);
