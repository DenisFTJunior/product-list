import { PRODUCTS } from "../../../../mocks/products";
import { Table } from "../../../base/presentation/Table";
import { productColumns } from "./config/columns";
import { productIcons } from "./config/icons";

export const ProductsTable = () => {
  return (
    <Table
      attributes={["id", "name", "group", "price"]}
      columns={productColumns}
      data={PRODUCTS}
      icons={productIcons}
    />
  );
};
