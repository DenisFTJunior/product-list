import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

type ModalProps = { children: React.ReactNode };

export const PortalElement = ({ children }: ModalProps) => {
  const containerRef = useRef(document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(containerRef.current);
    return () => {
      document.body.removeChild(containerRef.current);
    };
  }, []);

  return ReactDOM.createPortal(children, containerRef.current);
};
