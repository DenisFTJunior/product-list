import React from "react";
import { Actions } from "..";
import { IconButton } from "../../../../plastic/action/IconButton";
import { Flex } from "../../../../plastic/layout/Flex";

type TableActionsProps = {
  actions: Actions;
};

export const TableCardActions = ({ actions }: TableActionsProps) => {
  return (
    <Flex justifyContent="flex-end">
      {actions.map(({ action, label, icon }) => (
        <IconButton
          Icon={() => React.cloneElement(icon, { size: 20 })}
          onClick={action}
          key={`table-action-${label}`}
        />
      ))}
    </Flex>
  );
};
