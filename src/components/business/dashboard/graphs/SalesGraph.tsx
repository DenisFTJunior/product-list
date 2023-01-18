import {
  ResponsiveContainer,
  CartesianGrid,
  Bar,
  XAxis,
  YAxis,
  BarChart,
  Legend,
} from "recharts";
import { salesInMonth } from "../../../../mocks/dashboardGraph";
import { BLUE } from "../../../../toolbox/constants/colors";
import { Flex } from "../../../plastic/layout/Flex";
import { Card } from "../../../plastic/structure/Card";
import { Typography } from "../../../plastic/structure/Typography";

export const SalesGraph = () => {
  return (
    <Card border={`1px solid ${BLUE}`} borderRadius="10px">
      <Flex flexDirection="column" alignItems="flex-start" padding="20px">
        <Typography text="Total de Vendas" element="h3" fontSize="24px" fontWeight={500}/>
        <ResponsiveContainer width="80%" height="80%">
          <BarChart
            data={salesInMonth}
            margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 5,
            }}
            barSize={40}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 30, right: 10 }}
            />
            <YAxis />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="sales" fill="#8884d8" background={{ fill: "#eee" }} />
          </BarChart>
        </ResponsiveContainer>
      </Flex>
    </Card>
  );
};
