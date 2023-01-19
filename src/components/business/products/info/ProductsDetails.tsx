import { Product } from "../../../../toolbox/stores/products/actions/state";
import { InfoWithLabel } from "../../../base/presentation/InfoWithLabel";
import { Flex } from "../../../plastic/layout/Flex";

export const ProductDetails = ({
  description,
  group,
  name,
  price,
  id,
}: Product) => {
  return (
    <Flex
      flexWrap="wrap"
      padding="20px"
      gap={"5vh"}
      justifyContent="flex-start"
    >
      <InfoWithLabel label="Id" value={String(id)} width="40%" />
      <InfoWithLabel label="Nome" value={name} width="40%" />
      <InfoWithLabel label="Preço" value={String(price)} width="40%" />
      <InfoWithLabel label="Grupo" value={group} width="40%" />
      <InfoWithLabel label="Descrição" value={description} width="100%" />
    </Flex>
  );
};
