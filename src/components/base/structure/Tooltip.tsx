import React, { Children, useRef } from "react";
import { ALMOST_WHITE, GREEN } from "../../../toolbox/constants/colors";
import { Position } from "../../plastic/layout/Position";
import { Card } from "../../plastic/structure/Card";
import { Typography } from "../../plastic/structure/Typography";

type TooltipProps = {
  children: React.ReactElement;
  position?: "left" | "right" | "top" | "bottom";
  title: string;
  width?: string;
};

export const Tooltip = ({
  children,
  title,
  position = "right",
  width,
}: TooltipProps) => {
  const [open, setOpen] = React.useState(false);
  const childrenRef = useRef<HTMLDivElement>(null);
  const isX = position === "left" || position === "right";
  const formattedPosition = isX
    ? {
        top: `-${(childrenRef.current?.offsetHeight || 1) / 4}px`,
        [position === "left"
          ? "right"
          : "left"]: `calc(${childrenRef.current?.offsetWidth}px + 20px)`,
      }
    : {
        [position === "bottom"
          ? "top"
          : "bottom"]: `calc(${childrenRef.current?.offsetHeight}px + 20px)`,
      };

  return (
    <Position
      position="relative"
      width={width || "max-content"}
      height="max-content"
    >
      {React.cloneElement(children, {
        onMouseEnter: () => setOpen(true),
        onMouseOut: () => setOpen(false),
        ref: childrenRef,
      })}
      {open && (
        <Position
          position="absolute"
          {...formattedPosition}
          width="min-content"
        >
          <Card
            background={`${GREEN}`}
            padding="5px 10px"
            height="min-content"
            width="max-content"
          >
            <Typography element="span" text={title} />
          </Card>
        </Position>
      )}
    </Position>
  );
};
