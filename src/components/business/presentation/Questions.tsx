import { ALMOST_WHITE } from "../../../toolbox/constants/colors";
import { Dropdown } from "../../base/structure/Dropdown";
import { Typography } from "../../plastic/structure/Typography";

export const QuestionAndAnswers = () => {
  return (
    <Dropdown
      actionElement={
        <span
          style={{
            border: `1px solid ${ALMOST_WHITE}`,
            padding: "2px 10px",
            borderRadius: "2px",
          }}
        >
          <Typography text="?" element="span" color={ALMOST_WHITE} />
        </span>
      }
      tooltip={{ title: "Q/A", forceSpace: "40px", position: "left" }}
      content={
        <span
          style={{
            padding: "10px",
            borderRadius: "2px",
          }}
        >
          <Typography text="Nothing yet" element="span" whiteSpace="nowrap" />
        </span>
      }
    />
  );
};
