import React from "react";
import { Modal } from "../structure/Modal";

export const ModalWithTrigger = ({
  children,
  trigger,
  title,
}: {
  children: React.ReactNode;
  trigger: JSX.Element;
  title: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {React.cloneElement(trigger, { onClick: () => setIsOpen(true) })}
      <Modal isOpen={isOpen} title={title} onClose={() => setIsOpen(false)}>
        {children}
      </Modal>
    </>
  );
};
