import { useState } from "react";
import { MdDns, MdEqualizer } from "react-icons/md";
import { BLUE_GREEN } from "../../../../toolbox/constants/colors";
import { PAGES } from "../../../../toolbox/constants/pages";
import { Flex } from "../../../plastic/layout/Flex";
import { Position } from "../../../plastic/layout/Position";
import { Card } from "../../../plastic/structure/Card";
import { NavLink } from "./NavLink";

//useQuery params to get selected page
export const NavMenu = () => {
  const [selected, setSelected] = useState(PAGES.DASHBOARD);

  return (
    <Position position="fixed" left={0} bottom={0} width="5%" height="92vh" minWidth="70px">
      <Card background={BLUE_GREEN}>
        <Flex flexDirection="column" justifyContent="flex-start">
          <NavLink
            Icon={MdEqualizer}
            setSelected={setSelected}
            selected={selected}
            page={PAGES.DASHBOARD}
          />
          <NavLink
            Icon={MdDns}
            setSelected={setSelected}
            selected={selected}
            page={PAGES.PRODUCTS}
          />
        </Flex>
      </Card>
    </Position>
  );
};
