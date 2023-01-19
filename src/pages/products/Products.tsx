import { AddButton } from "../../components/base/actions/AddButton";
import { ModalWithTrigger } from "../../components/base/presentation/ModalWithTrigger";
import { AddProductsForm } from "../../components/business/products/form/AddProductsForm";
import { ProductsTable } from "../../components/business/products/table";
import { Flex } from "../../components/plastic/layout/Flex";
import { Typography } from "../../components/plastic/structure/Typography";

export const ProductsPage = () => {
  return (
    <Flex
      width="100%"
      height="100%"
      flexDirection="column"
      alignItems="flex-start"
    >
      <Flex justifyContent="space-between">
        <Typography
          text="PRODUCTS"
          element="h2"
          fontWeight={700}
          fontSize="32px"
        />
        <ModalWithTrigger trigger={<AddButton />} title="Adicionar produto">
          <AddProductsForm />
        </ModalWithTrigger>
      </Flex>

      <ProductsTable />
    </Flex>
  );
};
