import { ButtonHTMLAttributes } from "react";
import { ALMOST_BLACK } from "../../../toolbox/constants/colors";
import { Breakpoints } from "../../../toolbox/style/handleBreakpoints";
import { Typography } from "../structure/Typography";
import { Button } from "./Button";

type TextButtonProps = {
  text: string;
  size?: string;
  color?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style"> &
  Breakpoints<{ size: string }>;

export const TextButton = ({
  text,
  size = "16px",
  sm,
  md,
  color,
}: TextButtonProps) => {
  return (
    <Button
      width={"max-content"}
      height={"max-content"}
      background={"transparent"}
      border={"none"}
    >
      <Typography
        hoverColor={`${ALMOST_BLACK}80`}
        color={color || ALMOST_BLACK}
        text={text}
        element="span"
        fontSize={size}
        sm={{ fontSize: sm?.size }}
        md={{ fontSize: md?.size }}
      />
    </Button>
  );
};
