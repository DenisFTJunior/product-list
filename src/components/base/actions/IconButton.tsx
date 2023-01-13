import  { ButtonHTMLAttributes } from "react";
import { Button } from "../../plastic/action/Button";

type IconButtonProps = {
  Icon: () => JSX.Element;
  hasBorder?: boolean;
  size?: "small" | "medium" | "large" | "xLarge";
  borderColor?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style">;

const IconButtonSize = {
  small: "1rem",
  medium: "2rem",
  large: "3rem",
  xLarge: "4rem",
};
export const IconButton = ({
  Icon,
  borderColor,
  size = "medium",
}: IconButtonProps) => {
  return (
    <Button
      width={IconButtonSize[size]}
      height={IconButtonSize[size]}
      backgroundColor="transparent"
      border={Boolean(borderColor) ? `1px solid ${borderColor}` : undefined}
    >
      <Icon />
    </Button>
  );
};
