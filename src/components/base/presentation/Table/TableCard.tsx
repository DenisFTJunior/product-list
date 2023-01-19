import { BLUE, GREEN } from "../../../../toolbox/constants/colors";
import { Flex } from "../../../plastic/layout/Flex";
import { Card } from "../../../plastic/structure/Card";
import { Typography } from "../../../plastic/structure/Typography";

type TableCardProps = {
  data: { [key: string]: string | number };
  icons: { [key: string]: JSX.Element };
  attributes?: string[];
};
export const TableCard = ({ data, icons, attributes }: TableCardProps) => {
  const formattedData =
    !!attributes && attributes.length > 0 && Array.isArray(attributes)
      ? Object.entries(data).filter(([key]) => attributes.includes(key))
      : Object.entries(data);

  return (
    <Card borderRadius="10px" padding="20px" background={`${GREEN}80`}>
      <Flex flexDirection="column" alignItems="flex-start">
        {formattedData.map(([key, value]) => (
          <Flex gap="20px" key={`${data.id} - ${value}`} width="max-content">
            {icons[key]}
            <Typography text={String(value)} element="span" />
          </Flex>
        ))}
      </Flex>
    </Card>
  );
};
