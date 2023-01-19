import React from "react";
import { Input } from "../../plastic/form/Input";
import { Flex } from "../../plastic/layout/Flex";
import { Typography } from "../../plastic/structure/Typography";

type TextInputProps = Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  "placeholder" | "value" | "onChange"
> & {
  label?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => void;
};

export const NumberInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, placeholder = "", onChange, value }: TextInputProps, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      !!onChange && onChange(e, Number(value) < 0 ? "0" : value);
    };
    return (
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        width="100%"
        height="max-content"
      >
        {!!label && <Typography text={label} element="span" />}
        <Input
          placeholder={placeholder}
          onChange={handleChange}
          ref={ref}
          width="100%"
          height="8vh"
          padding={".5rem 1rem"}
          sm={{ fontSize: "20px" }}
          type="number"
          value={value}
        />
      </Flex>
    );
  }
);
