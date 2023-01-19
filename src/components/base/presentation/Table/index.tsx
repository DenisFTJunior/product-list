import { useState, useEffect } from "react";
import { Flex } from "../../../plastic/layout/Flex";
import { Display } from "../../../plastic/structure/Display";
import { TableCard } from "./TableCard";
import { Columns, DataItem, TableRow } from "./TableRow";

export type Attributes = string[];

type TableProps = {
  data: DataItem[];
  columns: Columns[];
  icons: { [key: string]: JSX.Element };
  attributes?: Attributes;
  actions?: Actions;
};

export type Actions = {
  label: string;
  action: () => void;
  icon: JSX.Element;
}[];

export const Table = ({
  data,
  columns,
  icons,
  attributes,
  actions,
}: TableProps) => {
  return (
    <>
      <Display sm={{ display: "none" }} defaultDisplay="block">
        <Flex flexDirection="column">
          <TableRow
            data={data[0]}
            isHeader
            columns={columns}
            attributes={attributes}
            actions={actions || []}
          />
          {data.map((item) => (
            <TableRow
              data={item}
              columns={columns}
              attributes={attributes}
              key={item.id}
              actions={actions || []}
            />
          ))}
        </Flex>
      </Display>

      <Display sm={{ display: "block" }} defaultDisplay="none">
        <Flex flexDirection="column">
          {data.map((item) => (
            <TableCard
              data={item}
              icons={icons}
              attributes={attributes}
              key={item.id}
              actions={actions || []}
            />
          ))}
        </Flex>
      </Display>
    </>
  );
};
