import React from "react";
import { Position } from "../../plastic/layout/Position";
import { Card } from "../../plastic/structure/Card";

type DropdownProps = {
  actionElement: React.ReactElement;
  actionType?: "onClick" | "onHover";
  content: React.ReactElement;
};

export const Dropdown = ({
  actionElement,
  actionType = "onHover",
  content,
}: DropdownProps) => {
  const [open, setOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const actionTrigger = actionType === "onHover" ? "onMouseEnter" : actionType;

  React.useEffect(() => {
    open && dropdownRef.current?.focus();
  }, [open]);

  return (
    <Position position="relative">
      {React.cloneElement(actionElement, {
        [actionTrigger]: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          setOpen(true);
          e.stopPropagation();
        },
      })}

      {open && (
        <Position position="absolute" bottom="-30px" ref={dropdownRef}>
          <Card
            width={"min-content"}
            background="white"
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
      )}
    </Position>
  );
};
