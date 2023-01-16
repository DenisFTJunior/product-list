import React, { Children, useRef } from "react";
import { ALMOST_WHITE, GREEN } from "../../../toolbox/constants/colors";
import { Position } from "../../plastic/layout/Position";
import { Card } from "../../plastic/structure/Card";

type TooltipProps = {
  children: React.ReactElement;
  position?: "left" | "right" | "top" | "bottom";
  title: string;
};

export const Tooltip = ({
  children,
  title,
  position = "right",
}: TooltipProps) => {
  const [open, setOpen] = React.useState(false);
  const childrenRef = useRef<HTMLDivElement>(null);
  const isX = position === "left" || position === "right";
  const formattedPosition = isX
    ? {
        top: `-${(childrenRef.current?.offsetHeight || 1) / 4}px`,
        [position]: `calc(-${childrenRef.current?.offsetWidth}px - 20px)`,
      }
    : {
        left: `-${(childrenRef.current?.offsetWidth || 1) / 2}px`,
        [position]: `calc(-${childrenRef.current?.offsetHeight}px - 20px)`,
      };

  return (
    <Position position="relative">
      {React.cloneElement(children, {
        onMouseEnter: () => setOpen(true),
        onMouseOut: () => setOpen(false),
        ref: childrenRef,
      })}
      {open && (
        <Position position="absolute" {...formattedPosition}>
          <Card
            background={`${GREEN}`}
            padding="5px 10px"
            height="min-content"
            width="max-content"
          >
            {title}
          </Card>
        </Position>
      )}
    </Position>
  );
};
