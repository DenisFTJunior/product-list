import React from "react";
import { Action, Actions } from "..";
import { IconButton } from "../../../../plastic/action/IconButton";
import { Flex } from "../../../../plastic/layout/Flex";
import { DataItem } from "../TableRow";

type TableActionsProps = {
  actions: Actions;
  record: DataItem;
};

export const TableCardActions = ({ actions, record }: TableActionsProps) => {
  const renderCurrentAction = ({ icon, action, label }: Action) => (
    <IconButton
      Icon={() => React.cloneElement(icon, { size: 20 })}
      onClick={() => action(record)}
      key={`table-action-${label}`}
    />
  );
  return (
    <Flex justifyContent="flex-end">
      {actions.map(({ action, label, icon, render }) =>
        !!render
          ? render({ icon, label, record, isCard: false, renderCurrentAction })
          : renderCurrentAction({ action, label, icon })
      )}
    </Flex>
  );
};
