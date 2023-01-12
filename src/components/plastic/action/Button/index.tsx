import { ButtonHTMLAttributes } from "react";

import { StyledButton, StyleProps } from "./StyledButton";

export type ButtonProps = { label?: string; icon: JSX.Element } & Partial<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style"> & StyleProps
>;

export const Button = ({ onClick, icon, label, ...rest }: ButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      event.preventDefault();
      onClick(event);
    }
  };

  return <StyledButton onClick={handleClick} {...rest}></StyledButton>;
};
