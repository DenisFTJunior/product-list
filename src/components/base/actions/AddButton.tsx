import { MdOutlineAdd } from "react-icons/md";
import { ALMOST_WHITE, GREEN } from "../../../toolbox/constants/colors";
import { IconButton } from "../../plastic/action/IconButton";

export const AddButton = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <IconButton
      Icon={() => <MdOutlineAdd color={ALMOST_WHITE} size="20px" />}
      backgroundColor={GREEN}
      onClick={onClick}
    />
  );
};
