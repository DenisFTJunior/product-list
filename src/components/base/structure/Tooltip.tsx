import React, { useRef } from "react";
import { ALMOST_WHITE, GREEN } from "../../../toolbox/constants/colors";
import { Position } from "../../plastic/layout/Position";
import { Card } from "../../plastic/structure/Card";
import { Typography } from "../../plastic/structure/Typography";

export type TooltipProps = {
  children: React.ReactElement;
  position?: "left" | "right" | "top" | "bottom";
  title: React.ReactNode;
  width?: string;
  forceSpace?: string;
  externalOpen?: boolean;
};

export const Tooltip = ({
  children,
  title,
  position = "right",
  width,
  forceSpace,
  externalOpen = false,
}: TooltipProps) => {
  const [open, setOpen] = React.useState(externalOpen);
  const childrenRef = useRef<HTMLDivElement>(null);
  const isX = position === "left" || position === "right";
  const formattedPosition = isX
    ? {
        top: `-${(childrenRef.current?.offsetHeight || 1) / 4}px`,
        [position === "left" ? "right" : "left"]:
          forceSpace || `calc(${childrenRef.current?.offsetWidth}px + 20px)`,
      }
    : {
        [position === "bottom" ? "top" : "bottom"]:
          forceSpace || `calc(${childrenRef.current?.offsetHeight}px + 20px)`,
      };

  React.useEffect(() => {
    setOpen(externalOpen);
  }, [externalOpen]);

  return (
    <Position
      position="relative"
      width={width || "max-content"}
      height="max-content"
      zIndex={100}
    >
      {externalOpen === undefined
        ? React.cloneElement(children, {
            onMouseEnter: () => setOpen(true),
            onMouseOut: () => setOpen(false),
            ref: childrenRef,
          })
        : children}

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
            borderRadius="5px"
          >
            {typeof title === "string" ? (
              <Typography element="span" text={title} color={ALMOST_WHITE} />
            ) : (
              title
            )}
          </Card>
        </Position>
      )}
    </Position>
  );
};
