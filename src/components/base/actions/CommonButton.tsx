import { ALMOST_BLACK, ALMOST_WHITE, BLUE, GREEN } from "../../../toolbox/constants/colors";
import { Button } from "../../plastic/action/Button";

type CommonButton = {
  children: React.ReactNode;
  onClick: () => void;
};

export const CommonButton = ({ children, onClick }: CommonButton) => {
  return (
    <Button
      onClick={onClick}
      backgroundColor={BLUE}
      color={ALMOST_WHITE}
      borderRadius="5px"
      padding="0.5rem 1rem"
      width="max-content"
      height="max-content"
      hoverColors={{ backgroundColor: GREEN }}
      minWidth={"100px"}
    >
      {children}
    </Button>
  );
};
