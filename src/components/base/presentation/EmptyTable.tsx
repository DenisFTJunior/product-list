import { MdOutlineWorkOff } from "react-icons/md";
import { Flex } from "../../plastic/layout/Flex";
import { Typography } from "../../plastic/structure/Typography";

export const EmptyTable = () => {
  return (
    <Flex>
      <MdOutlineWorkOff size="26px" color="red"/>
      <Typography
        text="Nenhum registro encontrado"
        fontSize={24}
        color="red"
        element="h4"
      />
    </Flex>
  );
};
