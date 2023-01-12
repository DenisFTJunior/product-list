import { ColorWithHoverProps } from "../../types/color";

export const formatColorWithHover = (
  colors: ColorWithHoverProps,
  defaultColor: string
) => {
  const { color, backgroundColor, borderColor, hoverColors } = colors;

  return {
    color: color || defaultColor,
    backgroundColor: backgroundColor || defaultColor,
    borderColor: borderColor || defaultColor,
    hoverColors: {
      color: hoverColors?.color || color || defaultColor,
      backgroundColor:
        hoverColors?.backgroundColor || backgroundColor || defaultColor,
      borderColor: hoverColors?.borderColor || borderColor || defaultColor,
    },
  };
};
