import { PRODUCTS } from "../../../../mocks/products";

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  group: string;
};
export interface ProductsState {
  products: Product[];
  form: Product & { hasError: boolean; errorMessage: string };
}

export const initialState: ProductsState = {
  products: PRODUCTS,
  form: {
    id: 0,
    name: "",
    price: 0,
    description: "",
    group: "",
    hasError: false,
    errorMessage: "",
  },
};
