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
import { Position } from "../../plastic/layout/Position";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  title: string;
  onClose: () => void;
};

export const Modal = ({ children, isOpen, title, onClose }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <PortalElement>
          <Position
            position="fixed"
            width="100vw"
            height="100vh"
            top="0"
            left="0"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            zIndex={1000}
          >
            <Flex>
              <Card
                padding="20px"
                background={ALMOST_WHITE}
                width="80%"
                height="min-content"
                borderRadius={10}
              >
                <Flex flexDirection="column" gap="20px">
                  <Flex justifyContent="space-between" height="min-content">
                    <Typography element="h4" text={title} fontWeight={600} fontSize="20px"/>
                    <IconButton
                      Icon={() => <MdClose color={ALMOST_BLACK} size="20px"/>}
                      onClick={onClose}
                    />
                  </Flex>
                  {children}
                </Flex>
              </Card>
            </Flex>
          </Position>
        </PortalElement>
      )}
    </>
  );
};
