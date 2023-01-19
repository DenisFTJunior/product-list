import { ALMOST_WHITE } from "../../../toolbox/constants/colors";
import { MenuButton } from "../../base/actions/MenuButton";
import { ModalWithTrigger } from "../../base/presentation/ModalWithTrigger";
import { Dropdown } from "../../base/structure/Dropdown";
import { Flex } from "../../plastic/layout/Flex";
import { Typography } from "../../plastic/structure/Typography";
import { AddProductsForm } from "../products/form/AddProductsForm";

const FAST_ACTIONS = [
  {
    label: "add product",
    action: () => {},
    withModal: true,
    modalTitle: "Add product",
  },
];
export const FastActions = () => {
  return (
    <Dropdown
      actionElement={
        <Flex
          padding="2px 10px"
          width="32px"
          height="32px"
          style={{
            border: `1px solid ${ALMOST_WHITE}`,
            borderRadius: "2px",
          }}
        >
          <Typography
            text="+"
            element="span"
            color={ALMOST_WHITE}
            fontSize="20px"
          />
        </Flex>
      }
      tooltip={{ title: "fast actions", forceSpace: "40px", position: "left" }}
      content={
        <>
          {FAST_ACTIONS.map(({ action, label, modalTitle, withModal }) =>
            withModal ? (
              <ModalWithTrigger
                trigger={
                  <MenuButton
                    onClick={action}
                    children={label}
                    key={`fast-action-${label}`}
                  />
                }
                title={modalTitle}
              >
                <AddProductsForm />
              </ModalWithTrigger>
            ) : (
              <MenuButton
                onClick={action}
                children={label}
                key={`fast-action-${label}`}
              />
            )
          )}
        </>
      }
    />
  );
};
