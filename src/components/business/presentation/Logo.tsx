import { ALMOST_WHITE } from "../../../toolbox/constants/colors";
import { Typography } from "../../plastic/structure/Typography";

export const Logo = ({ whiteLogo }: { whiteLogo?: boolean }) => (
  <Typography
    element="h2"
    text="LOGO"
    fontWeight={900}
    fontSize="2rem"
    color={whiteLogo ? ALMOST_WHITE : undefined}
    textAlign="start"
  />
);
