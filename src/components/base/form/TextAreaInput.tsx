import React from "react";
import { Input } from "../../plastic/form/Input";
import { Flex } from "../../plastic/layout/Flex";
import { Typography } from "../../plastic/structure/Typography";

type TextInputProps = Pick<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  "placeholder" | "onChange" | "value"
> & {
  rows?: number;
  label?: string;
  width?: string;
};

export const TextAreaInput = React.forwardRef<
  HTMLTextAreaElement,
  TextInputProps
>(
  (
    { label, placeholder = "", onChange, rows, value, width }: TextInputProps,
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
        <textarea
          placeholder={placeholder}
          onChange={onChange}
          ref={ref}
          rows={rows || 3}
          value={value}
          style={{
            width: width || "100%",
            backgroundColor: "transparent",
            borderRadius: "10px",
            padding: ".5rem 1rem",
          }}
        />
      </Flex>
    );
  }
);
