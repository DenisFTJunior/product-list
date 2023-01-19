import { Flex } from "../../plastic/layout/Flex";
import { Typography } from "../../plastic/structure/Typography";

export const InfoWithLabel = ({
  label,
  value,
  width,
  smWidth,
}: {
  label: string;
  value: string;
  width?: string;
  smWidth?: string;
}) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="flex-start"
      width={width || "100%"}
      height="max-content"
      sm={{ width: smWidth || "100%" }}
    >
      <Typography
        text={label}
        element="span"
        fontSize="14px"
        fontWeight={600}
        sm={{ fontSize: "16px" }}
      />
      <Typography
        text={value}
        element="span"
        fontSize="18px"
        sm={{ fontSize: "21px" }}
      />
    </Flex>
  );
};
