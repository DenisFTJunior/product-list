import React, { useEffect } from "react";
import { Position } from "../../plastic/layout/Position";
import { Card } from "../../plastic/structure/Card";
import { Tooltip, TooltipProps } from "./Tooltip";

type DropdownProps = {
  actionElement: React.ReactElement;
  actionType?: "onClick" | "onHover";
  content: React.ReactElement;
  tooltip?: Pick<TooltipProps, "position" | "forceSpace" | "title">;
};

// TODO: Create delayed hover
export const Dropdown = ({
  actionElement,
  actionType = "onHover",
  content,
  tooltip,
}: DropdownProps) => {
  const [open, setOpen] = React.useState(false);
  const actionTrigger = actionType === "onHover" ? "onMouseEnter" : actionType;
  let timer: number = 0;

  return (
    <Position position="relative">
      <Tooltip
        title={tooltip?.title}
        position={tooltip?.position}
        forceSpace={tooltip?.forceSpace}
        externalOpen={open}
      >
        {React.cloneElement(actionElement, {
          [actionTrigger]: (
            e: React.MouseEvent<HTMLDivElement, MouseEvent>
          ) => {
            Boolean(timer) && clearTimeout(timer);
            setOpen(true);
            e.stopPropagation();
          },
          onMouseLeave: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            timer = window.setTimeout(() => setOpen(false), 2000);
          },
        })}
      </Tooltip>

      {
        <Position
          position="absolute"
          bottom="-30px"
          style={{
            opacity: open ? 1 : 0,
            transition: "opacity .4s",
          }}
        >
          <Card
            className="dropdown-content"
            width={"min-content"}
            background="white"
            borderRadius="5px"
            onMouseEnter={() => Boolean(timer) && clearTimeout(timer)}
            onBlur={(e) => {
              e.preventDefault();
              setOpen(false);
            }}
            onMouseLeave={(e) => {
              e.preventDefault();
              setOpen(false);
            }}
          >
            {content}
          </Card>
        </Position>
      }
    </Position>
  );
};
