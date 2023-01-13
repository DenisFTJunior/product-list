import { ButtonHTMLAttributes } from "react";
import { StyledButton, StyleProps } from "./StyledButton";

export type ButtonProps = Partial<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style"> & StyleProps
>;

export const Button = ({ onClick, children, ...rest }: ButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      event.preventDefault();
      onClick(event);
    }
  };

  return (
    <StyledButton onClick={handleClick} {...rest}>
      {children}
    </StyledButton>
  );
};
