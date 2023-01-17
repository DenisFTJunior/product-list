import { MdEqualizer } from "react-icons/md";
import {
  ALMOST_WHITE,
} from "../../../../toolbox/constants/colors";
import { PAGES } from "../../../../toolbox/constants/pages";
import { Link } from "../../../plastic/action/Link";

export const NavLink = ({
  Icon,
  setSelected,
  selected,
  page,
}: {
  Icon: typeof MdEqualizer;
  setSelected: (page: PAGES) => void;
  selected: PAGES;
  page: PAGES;
}) => {
  const isSelected = (page: PAGES) => selected === page;
  const bgStyle = (page: PAGES) =>
    isSelected(page) ? `${ALMOST_WHITE}20` : "";

  const handleClick =
    (page: PAGES) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      setSelected(page);
    };

  return (
    <Link
      width={"100%"}
      height={"8vh"}
      to={`/${page}`}
      onClick={handleClick(page)}
      backgroundColor={bgStyle(page)}
    >
      <Icon color={ALMOST_WHITE} size="22px"/>
    </Link>
  );
};
