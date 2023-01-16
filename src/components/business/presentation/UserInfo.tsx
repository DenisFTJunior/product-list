import { MdOutlinePerson } from "react-icons/md";
import { ALMOST_WHITE } from "../../../toolbox/constants/colors";
import { Flex } from "../../plastic/layout/Flex";
import { Typography } from "../../plastic/structure/Typography";

export const UserInfo = ({ username = "UNKNOWN" }: { username?: string }) => {
  return (
    <Flex gap="10px">
      <Typography text={username} element="span" color={ALMOST_WHITE} />
      <MdOutlinePerson
        style={{
          border: `1px solid ${ALMOST_WHITE}`,
          borderRadius: "100%",
          padding: "4px",
        }}
        size="25px"
        color={ALMOST_WHITE}
      />
    </Flex>
  );
};
