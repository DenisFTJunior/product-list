import { MdOutlineAdd } from "react-icons/md";
import { ALMOST_WHITE, GREEN } from "../../../toolbox/constants/colors";
import { IconButton } from "../../plastic/action/IconButton";

export const AddButton = () => {
  return (
    <IconButton
      Icon={() => <MdOutlineAdd color={ALMOST_WHITE} size="20px"/>}
      backgroundColor={GREEN}
      onClick={() => console.log("Add")}
    />
  );
};
