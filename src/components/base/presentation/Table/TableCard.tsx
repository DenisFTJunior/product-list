import { Actions } from ".";
import { BLUE, GREEN } from "../../../../toolbox/constants/colors";
import { Flex, FlexItem } from "../../../plastic/layout/Flex";
import { Card } from "../../../plastic/structure/Card";
import { Typography } from "../../../plastic/structure/Typography";
import { TableCardActions } from "./actions/TableCardAction";

type TableCardProps = {
  data: { [key: string]: string | number };
  icons: { [key: string]: JSX.Element };
  attributes?: string[];
  actions: Actions;
};
export const TableCard = ({
  data,
  icons,
  attributes,
  actions,
}: TableCardProps) => {
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
    <Card borderRadius="10px" padding="20px" background={`${GREEN}80`}>
      <Flex flexDirection="column" alignItems="flex-start">
        <FlexItem alignSelf="flex-end">
          <TableCardActions actions={actions} />
        </FlexItem>
        {sortedData.map(([key, value]) => (
          <Flex gap="20px" key={`${data.id} - ${value}`} width="max-content">
            {icons[key]}
            <Typography text={String(value)} element="span" />
          </Flex>
        ))}
      </Flex>
    </Card>
  );
};
