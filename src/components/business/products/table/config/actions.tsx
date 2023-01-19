import { MdRemoveCircleOutline, MdSearch, MdToc } from "react-icons/md";

export const productsActions = [
  {
    label: "Ver detalhes",
    action: () => console.log("Ver detalhes"),
    icon: <MdSearch />,
  },
  {
    label: "Remover",
    action: () => console.log("Remover"),
    icon: <MdRemoveCircleOutline color="red" />,
  },
];
