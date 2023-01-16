import { ALMOST_BLACK, ALMOST_WHITE, GREEN } from "../../../toolbox/constants/colors";
import { Button } from "../../plastic/action/Button";

type MenuButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const MenuButton = ({ children, onClick }: MenuButtonProps) => {
  return (
    <Button
      onClick={onClick}
      backgroundColor={ALMOST_WHITE}
      color={ALMOST_BLACK}
      borderRadius="5px"
      padding="0.5rem 1rem"
      width="max-content"
      height="max-content"
      hoverColors={{ backgroundColor: GREEN, color: ALMOST_WHITE }}
      minWidth={"200px"}
    >
      {children}
    </Button>
  );
};
