import {
  ALMOST_BLACK,
  ALMOST_WHITE,
  BLUE,
} from "../../../toolbox/constants/colors";
import { Flex } from "../../plastic/layout/Flex";
import { Card } from "../../plastic/structure/Card";
import { Typography } from "../../plastic/structure/Typography";
import { IconButton } from "../../plastic/action/IconButton";
import { PortalElement } from "./PortalElement";
import { MdClose } from "react-icons/md";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  title: string;
  onClose: () => void;
};

//TODO: Create background overlay
export const Modal = ({ children, isOpen, title, onClose }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <PortalElement>
          <Card
            border={`1px solid ${BLUE}`}
            padding="50px"
            background={ALMOST_WHITE}
          >
            <Flex flexDirection="column" gap="20px">
              <Flex justifyContent="space-between">
                <Typography element="h4" text={title} />
                <IconButton
                  Icon={() => <MdClose color={ALMOST_BLACK} />}
                  onClick={onClose}
                />
              </Flex>
              {children}
            </Flex>
          </Card>
        </PortalElement>
      )}
    </>
  );
};
