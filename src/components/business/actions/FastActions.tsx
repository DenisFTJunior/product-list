import { MdOutlineAdd } from "react-icons/md";
import { ALMOST_WHITE } from "../../../toolbox/constants/colors";
import { MenuButton } from "../../base/actions/MenuButton";
import { Dropdown } from "../../base/structure/Dropdown";
import { Typography } from "../../plastic/structure/Typography";

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
        <span
          style={{
            border: `1px solid ${ALMOST_WHITE}`,
            padding: "2px 8px",
            borderRadius: "2px",
          }}
        >
          <Typography
            text="+"
            element="span"
            color={ALMOST_WHITE}
            fontWeight={500}
            fontSize="20px"
          />
        </span>
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
