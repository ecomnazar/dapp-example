import React from "react";
import { useOutsideClick } from "../../shared/hooks/useOutsideClick";
import clsx from "clsx";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  height?: number;
  className?: string;
}

export const DrawerModal: React.FC<Props> = ({
  isOpen,
  onClose,
  children,
  height = 400,
  className,
}) => {
  const divRef = useOutsideClick(() => isOpen && onClose());

  return (
    <div
      className={clsx(
        "h-screen w-screen bg-black fixed top-0 left-0 flex items-end fixViewport z-[999] !mt-[0px] transition-all duration-500",
        {
          "bg-opacity-50 visible": isOpen,
          "bg-opacity-0 invisible": !isOpen,
        }
      )}
    >
      <div
        ref={divRef}
        style={{ height: `${height}px` }}
        className={clsx(
          "bg-[#FDFAF2] w-screen rounded-t-2xl flex flex-col transition-all duration-500",
          {
            "translate-y-0": isOpen,
            "translate-y-[100%]": !isOpen,
          }
        )}
      >
        {children}
      </div>
    </div>
  );
};
