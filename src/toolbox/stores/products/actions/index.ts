import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productFormActions } from "./form";
import { initialState } from "./state";

export const loginSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    removeProducts: (state, action: PayloadAction<{ id: number }>) => {
      console.log("state.products", state.products);
      const { id } = action.payload;
      state.products = state.products.filter((p) => p.id !== id);
    },

    addProducts: (state) => {
      if (!state.form.hasError) {
        const newProduct = {
          ...state.form,
          id: (state.products[state.products.length - 1]?.id || 0) + 1,
        };
        state.products = [...state.products, newProduct];
        state.form = initialState.form;
      }
    },
    ...productFormActions,
  },
});

// Action creators are generated for each case reducer function
export const { removeProducts, addProducts, fillField, validateForm } =
  loginSlice.actions;

export default loginSlice.reducer;
