import styled from "@emotion/styled";
import {
  Breakpoints,
  handleBreakpoints,
} from "../../../toolbox/style/handleBreakpoints";

type DisplayProps = {
  display?: string;
};

export const Display = styled.div(
  ({
    display,
    defaultDisplay,
    sm,
    md,
  }: DisplayProps &
    Breakpoints<DisplayProps> & { defaultDisplay?: string }) => ({
    display: display || defaultDisplay || "inline-block",
    width: "100%",
    height: "100%",
    ...handleBreakpoints({
      md: { display: md?.display || defaultDisplay },
      sm: { display: sm?.display || defaultDisplay },
    }),
  })
);
