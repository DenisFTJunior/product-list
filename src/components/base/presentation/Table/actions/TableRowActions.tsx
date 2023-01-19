import { MdToc } from "react-icons/md";
import { Actions } from "../";
import { Flex } from "../../../../plastic/layout/Flex";
import { MenuButton } from "../../../actions/MenuButton";
import { Dropdown } from "../../../structure/Dropdown";

export type TableActionsProps = {
  actions: Actions;
};

export const TableRowActions = ({ actions }: TableActionsProps) => {
  return (
    <Dropdown
      actionElement={<MdToc />}
      content={
        <>
          {actions.map(({ action, label, icon }) => (
            <MenuButton onClick={action} key={`table-action-${label}`}>
              <Flex>
                {icon}
                {label}
              </Flex>
            </MenuButton>
          ))}
        </>
      }
    />
  );
};

MdToc;
