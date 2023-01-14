import { MdOutlineAdd } from "react-icons/md";
import { ALMOST_WHITE } from "../../../toolbox/constants/colors";
import { IconButton } from "../../plastic/action/IconButton";

export const AddButton = () => {
  return (
    <IconButton
      Icon={() => <MdOutlineAdd color={ALMOST_WHITE} />}
      onClick={() => console.log("fastActions")}
    />
  );
};
