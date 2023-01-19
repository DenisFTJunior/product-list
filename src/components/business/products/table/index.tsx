import {
  useAppDispatch,
  useAppSelector,
} from "../../../../toolbox/stores/hooks";
import { Table } from "../../../base/presentation/Table";
import { genProductsActions } from "./config/actions";
import { productColumns } from "./config/columns";
import { productIcons } from "./config/icons";

export const ProductsTable = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.product);

  return (
    <Table
      attributes={["id", "name", "group", "price", "actions"]}
      columns={productColumns}
      data={products}
      icons={productIcons}
      // @ts-ignore
      actions={genProductsActions(dispatch)}
    />
  );
};
