import { MdOutlineAdd } from "react-icons/md";
import { ALMOST_WHITE } from "../../../toolbox/constants/colors";
import { MenuButton } from "../../base/actions/MenuButton";
import { Dropdown } from "../../base/structure/Dropdown";
import { Flex } from "../../plastic/layout/Flex";
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
        <Flex
          padding="2px 10px"
          width="32px"
          height="32px"
          style={{
            border: `1px solid ${ALMOST_WHITE}`,
            borderRadius: "2px",
          }}
        >
          <Typography text="+" element="span" color={ALMOST_WHITE} fontSize="20px"/>
        </Flex>
      }
      tooltip={{ title: "fast actions", forceSpace: "40px", position: "left" }}
      content={
        <>
          {FAST_ACTIONS.map(({ action, label }) => (
            <MenuButton
              onClick={action}
              children={label}
              key={`fast-action-${label}`}
            />
          ))}
        </>
      }
    />
  );
};
