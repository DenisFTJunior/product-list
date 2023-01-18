import { useState } from "react";
import { MdDns, MdEqualizer } from "react-icons/md";
import { BLUE_GREEN } from "../../../../toolbox/constants/colors";
import { PAGES } from "../../../../toolbox/constants/pages";
import { Flex, FlexItem } from "../../../plastic/layout/Flex";
import { Card } from "../../../plastic/structure/Card";
import { LogoutLink } from "../../actions/login/LogoutLink";
import { NavLink } from "./NavLink";

//useQuery params to get selected page
export const NavMenu = () => {
  const [selected, setSelected] = useState(PAGES.DASHBOARD);

  return (
    <Card
      background={BLUE_GREEN}
      width="5%"
      height="92vh"
      minWidth="70px"
      sm={{ width: "100%", height: "100%" }}
    >
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        sm={{ flexDirection: "row", justifyContent: "space-between" }}
      >
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
        <FlexItem flex={10} />
        <FlexItem flex={1}>
          <LogoutLink />
        </FlexItem>
      </Flex>
    </Card>
  );
};
