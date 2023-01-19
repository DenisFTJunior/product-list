import { required } from "./rules/required";
import { Rules } from "./validateRules";

export const genEqualValidations = ({
  fields,
  rules,
  state,
}: {
  fields: string[];
  rules?: Rules;
  state: any;
}) => {
  return fields.map((field) => {
    return {
      name: field,
      value: state.form[field],
      rules: rules || [
        {
          func: (v: any) => required(v),
          message: `Please, fill the ${field} field`,
        },
      ],
    };
  });
};
