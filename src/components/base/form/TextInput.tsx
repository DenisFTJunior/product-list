import React from "react";
import { Input } from "../../plastic/form/Input";
import { Flex } from "../../plastic/layout/Flex";
import { Typography } from "../../plastic/structure/Typography";

type TextInputProps = Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  "placeholder" | "onChange" | "value"
> & {
  type?: "text" | "password";
  label?: string;
};

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    { label, placeholder = "", onChange, type = "text",value }: TextInputProps,
    ref
  ) => {
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
          onChange={onChange}
          ref={ref}
          width="100%"
          height="8vh"
          padding={".5rem 1rem"}
          sm={{ fontSize: "20px" }}
          type={type}
          value={value}
        />
      </Flex>
    );
  }
);
