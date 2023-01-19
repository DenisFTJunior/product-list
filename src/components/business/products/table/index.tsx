import { PRODUCTS } from "../../../../mocks/products";
import { Table } from "../../../base/presentation/Table";
import { productsActions } from "./config/actions";
import { productColumns } from "./config/columns";
import { productIcons } from "./config/icons";

export const ProductsTable = () => {
  return (
    <Table
      attributes={["id", "name", "group", "price", "actions"]}
      columns={productColumns}
      data={PRODUCTS}
      icons={productIcons}
      actions={productsActions}
    />
  );
};
