/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CSSProperties } from "react";
import { ALMOST_BLACK } from "../../../toolbox/constants/colors";

type TypographyProps = {
  element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  text: string;
} & Partial<
  Pick<
    CSSProperties,
    "fontSize" | "fontWeight" | "color" | "whiteSpace" | "textAlign"
  >
>;

export const Typography = ({
  element,
  text,
  fontSize,
  fontWeight,
  color,
  whiteSpace,
  textAlign,
}: TypographyProps) => {
  const Element = element as keyof JSX.IntrinsicElements;
  const style = css({
    fontSize: fontSize || "1rem",
    fontWeight: fontWeight || "normal",
    color: color || ALMOST_BLACK,
    textAlign: textAlign || "center",
    whiteSpace: whiteSpace || "normal",
  });
  return <Element css={style}>{text}</Element>;
};
