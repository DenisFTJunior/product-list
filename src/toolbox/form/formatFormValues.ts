
import { Rules, validateRules } from "./validateRules";

export type FormProps = {
  value: any;
  name: string;
  rules?: Rules;
}[];

export type FormError = { error: string };

// Add rules for validation
export const formatFormValues = (inputs: FormProps) => {
  return inputs.reduce(
    (acc: { [key: string]: { error: string } | string }, input) => {
      const value = input.value;
      const name = input.name;
      const errorInputs = input.rules ? validateRules(value, input.rules) : [];
      if (value && errorInputs.length === 0) {
        acc[name] = value;
      } else if (errorInputs.length > 0) {
        acc[name] = { error: errorInputs[0] || "" };
      }
      return acc;
    },
    {}
  );
};
