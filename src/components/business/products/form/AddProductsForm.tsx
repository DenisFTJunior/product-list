import {
  useAppDispatch,
  useAppSelector,
} from "../../../../toolbox/stores/hooks";
import {
  addProducts,
  fillField,
  validateForm,
} from "../../../../toolbox/stores/products/actions";
import { ProductField } from "../../../../toolbox/stores/products/actions/form";
import { CommonButton } from "../../../base/actions/CommonButton";
import { NumberInput } from "../../../base/form/NumberInput";
import { TextAreaInput } from "../../../base/form/TextAreaInput";
import { TextInput } from "../../../base/form/TextInput";
import { Flex, FlexItem } from "../../../plastic/layout/Flex";
import { Typography } from "../../../plastic/structure/Typography";

export const AddProductsForm = () => {
  const dispatch = useAppDispatch();
  const { description, group, name, price, hasError, errorMessage } =
    useAppSelector((state) => state.product.form);
  const fillForm = (field: ProductField, value: string | number) => {
    dispatch(fillField({ field, value }));
  };

  const handleSubmit = () => {
    dispatch(validateForm());
    dispatch(addProducts());
  };

  return (
    <Flex
      flexWrap="wrap"
      height="min-content"
      flexDirection="column"
      alignItems="flex-start"
    >
      <Flex height="min-content">
        <FlexItem height="min-content">
          <TextInput
            label="Nome do Produto"
            value={name}
            onChange={(e) => fillForm("name", e.target.value)}
          />
        </FlexItem>

        <FlexItem height="min-content">
          <NumberInput
            label="Preço do Produto"
            value={price}
            onChange={(e) => fillForm("price", Number(e.target.value))}
          />
        </FlexItem>
      </Flex>

      <FlexItem flex={1} height="min-content" width={"100%"}>
        <TextInput
          label="Grupo do Produto"
          value={group}
          onChange={(e) => fillForm("group", e.target.value)}
        />
      </FlexItem>
      <FlexItem flex={1} height="min-content">
        <TextAreaInput
          label="Descrição do Produto"
          value={description}
          onChange={(e) => fillForm("description", e.target.value)}
          width="74vw"
          rows={5}
        />
      </FlexItem>
      {hasError && (
        <FlexItem flex={1} height="min-content">
          <Typography text={errorMessage} element="span" color="red" />
        </FlexItem>
      )}
      <FlexItem flex={1} height="min-content" alignSelf="flex-end">
        <CommonButton onClick={handleSubmit}>Salvar</CommonButton>
      </FlexItem>
    </Flex>
  );
};
