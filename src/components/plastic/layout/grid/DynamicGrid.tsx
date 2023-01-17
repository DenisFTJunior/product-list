import { CSSProperties } from "react";
import styled from "@emotion/styled";
import { formatGridLines } from "../../../../toolbox/style/formatGridLines";
import { Line } from "../../../../toolbox/style/types/grid";
import { appendStyle } from "../../../../toolbox/helpers/appendStyle";

type GridProps = {
  columns: Line;
  rows: Line;
} & Pick<CSSProperties, "gridGap">;

export const DynamicGrid = ({ columns, rows, gridGap }: GridProps) => {
  const gridTemplateColumns = formatGridLines(columns);
  const gridTemplateRows = formatGridLines(rows);
  return styled.div({
    display: "grid",
    ...appendStyle({
      gridTemplateColumns,
      gridTemplateRows,
      gridGap,
    }),
  });
};
