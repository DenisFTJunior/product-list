import { CSSProperties } from "react";
import styled from "@emotion/styled";
import { appendStyle } from "../../../../toolbox/helpers/appendStyle";
import { formatGridTemplate } from "../../../../toolbox/style/formatGridTemplate";
import {
  Breakpoints,
  handleBreakpoints,
} from "../../../../toolbox/style/handleBreakpoints";

type TemplateGridProps = {
  columns: CSSProperties["gridTemplateColumns"];
  rows: CSSProperties["gridTemplateRows"];
  template: string[][];
} & Pick<CSSProperties, "gridGap">;

const formatGridStyle = (props?: TemplateGridProps) => ({
  gridTemplateColumns: props?.columns,
  gridTemplateRows: props?.rows,
  gridTemplateAreas: formatGridTemplate(props?.template),
  gridGap: props?.gridGap,
});

export const TemplateGrid = styled.div(
  ({
    columns,
    rows,
    template,
    gridGap,
    sm,
    md,
  }: TemplateGridProps & Breakpoints<TemplateGridProps>) => ({
    display: "grid",
    ...appendStyle(formatGridStyle({ columns, rows, template, gridGap })),

    ...handleBreakpoints({ sm:formatGridStyle(sm), md:formatGridStyle(md) }),
  })
);

export const TemplateGridItem = styled.div(
  ({ gridArea }: Pick<CSSProperties, "gridArea">) => ({
    ...appendStyle({
      gridArea,
    }),
  })
);
