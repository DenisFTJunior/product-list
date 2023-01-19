import { Actions } from ".";
import { GREEN } from "../../../../toolbox/constants/colors";
import { Flex, FlexItem } from "../../../plastic/layout/Flex";
import { Card } from "../../../plastic/structure/Card";
import { Typography } from "../../../plastic/structure/Typography";
import { TableRowActions } from "./actions/TableRowActions";

export type DataItem = {
  [key: string]: string | number;
};
export type Columns = {
  render?: (value: string | number, data: DataItem) => JSX.Element;
  flex?: string | number;
  dataIndex: string;
};

type TableRowProps = {
  data: DataItem;
  isHeader?: boolean;
  attributes?: string[];
  columns?: Columns[];
  actions: Actions;
};

export const TableRow = ({
  data,
  columns,
  isHeader,
  attributes,
  actions,
}: TableRowProps) => {
  const formattedData =
    !!attributes && attributes.length > 0 && Array.isArray(attributes)
      ? Object.entries(data).filter(([key]) => attributes.includes(key))
      : Object.entries(data);

  const sortedData = formattedData.sort((a, b) => {
    const indexA = attributes?.findIndex((item) => item === a[0]) || 0;
    const indexB = attributes?.findIndex((item) => item === b[0]) || 0;
    return indexA - indexB;
  });

  return (
    <Card
      background={isHeader ? "transparent" : `${GREEN}80`}
      shadowColor={isHeader ? "transparent" : `${GREEN}80`}
      width="100%"
      height="10vh"
      padding="0 5%"
      borderRadius="20px"
      key={data.id}
    >
      <Flex>
        {sortedData.map(([key, value]) => {
          const column = columns?.filter((item) => item.dataIndex === key)[0];
          return (
            <FlexItem flex={column?.flex} key={`${data.id} - ${value}`}>
              {!!column?.render && !isHeader ? (
                column?.render(value, data)
              ) : (
                <Typography
                  text={isHeader ? String(key) : String(value)}
                  element="span"
                />
              )}
            </FlexItem>
          );
        })}
        {actions.length > 0 && !isHeader && (
          <FlexItem flex={0} key={`${data.id} - actions`}>
            <TableRowActions actions={actions} record={data}/>
          </FlexItem>
        )}
        {actions.length > 0 && isHeader && (
          <FlexItem flex={0} key={`${data.id} - actions`}>
            <Typography text={"Actions"} element="span" />
          </FlexItem>
        )}
      </Flex>
    </Card>
  );
};
