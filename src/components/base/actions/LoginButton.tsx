import {
  ALMOST_WHITE,
  GREEN,
  GREEN_BLUE,
} from "../../../toolbox/constants/colors";
import { Button } from "../../plastic/action/Button";

type LoginButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
};
export const LoginButton = ({ onClick }: LoginButtonProps) => {
  return (
    <Button
      onClick={onClick}
      background={GREEN_BLUE}
      color={ALMOST_WHITE}
      borderRadius="5px"
      padding="0.5rem 1rem"
      width="10vw"
      height="7vh"
      hoverColors={{ backgroundColor: GREEN }}
      minWidth={"150px"}
    >
      LOGIN
    </Button>
  );
};
