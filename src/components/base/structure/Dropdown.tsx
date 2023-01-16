import React from "react";
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
            setOpen(true);
            e.stopPropagation();
          },
        })}
      </Tooltip>

      {
        <Position
          position="absolute"
          bottom="-30px"
          style={{ opacity: open ? 1 : 0, transition: "opacity .4s" }}
        >
          <Card
            width={"min-content"}
            background="white"
            borderRadius="5px"
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
