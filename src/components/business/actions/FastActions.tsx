import { MdOutlineAdd } from "react-icons/md";
import { ALMOST_WHITE } from "../../../toolbox/constants/colors";
import { MenuButton } from "../../base/actions/MenuButton";
import { Dropdown } from "../../base/structure/Dropdown";

const FAST_ACTIONS = [
  {
    label: "add product",
    action: () => {},
  },
];
export const FastActions = () => {
  return (
    <Dropdown
      actionElement={
        <MdOutlineAdd
          size="22px"
          color={ALMOST_WHITE}
          style={{ border: `1px solid ${ALMOST_WHITE}`, borderRadius: "2px" }}
        />
      }
      tooltip={{ title: "fast actions", forceSpace: "40px", position: "left" }}
      content={
        <>
          {FAST_ACTIONS.map(({ action, label }) => (
            <MenuButton onClick={action} children={label} />
          ))}
        </>
      }
    />
  );
};
