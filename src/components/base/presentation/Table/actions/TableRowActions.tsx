import { MdToc } from "react-icons/md";
import { Action, Actions } from "../";
import { Flex } from "../../../../plastic/layout/Flex";
import { MenuButton } from "../../../actions/MenuButton";
import { Dropdown } from "../../../structure/Dropdown";
import { DataItem } from "../TableRow";

export type TableActionsProps = {
  actions: Actions;
  record: DataItem;
};

export const TableRowActions = ({ actions, record }: TableActionsProps) => {
  const renderCurrentAction = ({ icon, action, label }: Action) => (
    <MenuButton onClick={() => action(record)} key={`table-action-${label}`}>
      <Flex>
        {icon}
        {label}
      </Flex>
    </MenuButton>
  );
  return (
    <Dropdown
      actionElement={<MdToc />}
      content={
        <>
          {actions.map(({ action, label, icon, render }) =>
            !!render
              ? render({
                  icon,
                  label,
                  record,
                  isCard: false,
                  renderCurrentAction,
                })
              : renderCurrentAction({ action, label, icon })
          )}
        </>
      }
    />
  );
};

MdToc;
