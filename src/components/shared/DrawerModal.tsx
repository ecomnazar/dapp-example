import React from "react";
import clsx from "clsx";
import { useOutsideClick } from "../../shared/hooks/useOutsideClick";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  height?: number;
  className?: string;
  disableAnimation?: boolean;
}

export const DrawerModal: React.FC<Props> = ({
  isOpen,
  onClose,
  children,
  height = 400,
  className,
  disableAnimation = false,
}) => {
  const divRef = useOutsideClick(() => isOpen && onClose());

  return (
    <div
      className={clsx(
        "h-screen w-screen modal bg-black fixed top-0 left-0 flex items-end z-[999] !mt-[0px]",
        {
          "bg-opacity-50 visible": isOpen,
          "bg-opacity-0 invisible": !isOpen,
          "transition-all duration-500": !disableAnimation,
        }
      )}
    >
      <div
        ref={divRef}
        style={{ height: `${height}px` }}
        className={clsx("bg-[#FDFAF2] w-screen rounded-t-2xl flex flex-col", {
          "translate-y-0": isOpen,
          "translate-y-[100%]": !isOpen && !disableAnimation,
          "transition-all duration-500": !disableAnimation,
        })}
      >
        {children}
      </div>
    </div>
  );
};
