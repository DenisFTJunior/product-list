import { ProductByGroupGraph } from "../../components/business/dashboard/graphs/productByGroupGraph";
import { SalesGraph } from "../../components/business/dashboard/graphs/SalesGraph";
import { Flex, FlexItem } from "../../components/plastic/layout/Flex";
import { Typography } from "../../components/plastic/structure/Typography";

export const DashboardPage = () => {
  return (
    <Flex
      justifyContent="flex-start"
      width="100%"
      height="100%"
      alignItems="flex-start"
      flexDirection="column"
    >
      <FlexItem>
        <Typography
          text="DASHBOARD"
          element="h2"
          fontWeight={700}
          fontSize="32px"
        />
      </FlexItem>
      <Flex sm={{ flexDirection: "column" }}>
        <FlexItem width={"50%"} height="50vh" sm={{ width: "100%" }}>
          <SalesGraph />
        </FlexItem>
        <FlexItem width={"50%"} height="50vh" sm={{ width: "100%" }}>
          <ProductByGroupGraph />
        </FlexItem>
      </Flex>
    </Flex>
  );
};
