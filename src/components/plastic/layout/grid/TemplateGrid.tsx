import { CSSProperties } from "react";
import styled from "@emotion/styled";
import { appendStyle } from "../../../../toolbox/helpers/appendStyle";
import { formatGridTemplate } from "../../../../toolbox/style/formatGridTemplate";

type TemplateGridProps = {
  columns: CSSProperties["gridTemplateColumns"];
  rows: CSSProperties["gridTemplateRows"];
  template: string[][];
} & Pick<CSSProperties, "gridGap">;

export const TemplateGrid = styled.div(
  ({ columns, rows, template, gridGap }: TemplateGridProps) => ({
    display: "grid",
    ...appendStyle({
      gridTemplateColumns: columns,
      gridTemplateRows: rows,
      gridTemplateAreas: formatGridTemplate(template),
      gridGap,
    }),
  })
);

export const TemplateGridItem = styled.div(
  ({ gridArea }: Pick<CSSProperties, "gridArea">) => ({
    ...appendStyle({
      gridArea,
    }),
  })
);
