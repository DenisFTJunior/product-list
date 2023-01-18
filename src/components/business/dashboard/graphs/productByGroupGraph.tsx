import { PieChart, Pie, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { productsByGroup } from "../../../../mocks/dashboardGraph";
import { BLUE } from "../../../../toolbox/constants/colors";
import { Flex } from "../../../plastic/layout/Flex";
import { Card } from "../../../plastic/structure/Card";
import { Typography } from "../../../plastic/structure/Typography";

export const ProductByGroupGraph = () => {
  return (
    <Card border={`1px solid ${BLUE}`} borderRadius="10px">
      <Flex flexDirection="column" alignItems="flex-start" padding="20px">
        <Typography
          text="Produtos por Grupo"
          element="h3"
          fontSize="24px"
          fontWeight={500}
        />

        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={100} height={100}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={productsByGroup}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Flex>
    </Card>
  );
};
