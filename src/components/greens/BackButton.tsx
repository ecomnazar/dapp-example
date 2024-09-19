import clsx from "clsx";
import React from "react";
import { ReactSVG } from "react-svg";
import { GREENS_MINIAPP_URL } from "../../constants/urls";

interface Props {
  className?: string;
}

export const BackButton: React.FC<Props> = ({ className }) => {
  return (
    <ReactSVG
      onClick={() => {
        if (typeof window !== "undefined") {
          window.location.href = GREENS_MINIAPP_URL;
        }
      }}
      src="/greens/icons/back.svg"
      className={clsx("w-[44px]", className)}
    />
  );
};
