import { MdRemoveCircleOutline, MdSearch, MdToc } from "react-icons/md";
import { removeProducts } from "../../../../../toolbox/stores/products/actions";
import { Product } from "../../../../../toolbox/stores/products/actions/state";
import { AppDispatch } from "../../../../../toolbox/stores/store";
import { ModalWithTrigger } from "../../../../base/presentation/ModalWithTrigger";
import { ProductDetails } from "../../info/ProductsDetails";

export const genProductsActions = (dispatch: AppDispatch) => [
  {
    label: "Ver detalhes",
    render: ({ icon, label, record, renderCurrentAction }: any) => (
      <ModalWithTrigger
        key={`table-action-${label}`}
        trigger={renderCurrentAction({ icon, label, record })}
        title="Detalhes do produto"
        children={<ProductDetails {...record} />}
      ></ModalWithTrigger>
    ),
    icon: <MdSearch />,
  },
  {
    label: "Remover",
    action: (record: Product) => {
      dispatch(removeProducts({ id: record.id }));
    },
    icon: <MdRemoveCircleOutline color="red" />,
  },
];
