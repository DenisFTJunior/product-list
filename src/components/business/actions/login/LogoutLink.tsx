import { MdLogout } from "react-icons/md";
import { ALMOST_WHITE } from "../../../../toolbox/constants/colors";
import { useAppDispatch } from "../../../../toolbox/stores/hooks";
import { logout } from "../../../../toolbox/stores/login/actions";
import { Link } from "../../../plastic/action/Link";

export const LogoutLink = () => {
  const dispatch = useAppDispatch();

  return (
    <Link
      width={"100%"}
      height={"8vh"}
      to={`/`}
      onClick={() => dispatch(logout())}
    >
      <MdLogout color={ALMOST_WHITE} size="22px" />
    </Link>
  );
};
