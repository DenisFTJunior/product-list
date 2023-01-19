import { PayloadAction } from "@reduxjs/toolkit";
import { formatFormValues, FormError } from "../../../form/formatFormValues";
import { genEqualValidations } from "../../../form/generateEqualValidations";
import {  ProductsState } from "./state";

export type ProductField = "name" | "price" | "description" | "group";

export const productFormActions = {
  fillField: (
    state: ProductsState,
    action: PayloadAction<{ field: ProductField; value: any }>
  ) => {
    const { field, value } = action.payload;
    // @ts-ignore
    state.form[field] = value;
  },

  validateForm: (state: ProductsState) => {
    state.form.errorMessage = "";
    state.form.hasError = false;

    const formattedValues = formatFormValues(
      genEqualValidations({
        fields: ["name", "price", "description", "group"],
        state,
      })
    );

    const hasError = Object.values(formattedValues).some(
      (value) => typeof value === "object"
    );

    if (hasError)
      state.form.errorMessage = (
        Object.entries(formattedValues).filter(
          ([_, v]) => typeof v === "object"
        )[0][1] as FormError
      ).error;

    state.form.hasError = hasError;
  },
};
