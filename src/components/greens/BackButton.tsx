import clsx from "clsx";
import React from "react";
import { ReactSVG } from "react-svg";

interface Props {
  className?: string;
}

export const BackButton: React.FC<Props> = ({ className }) => {
  return (
    <ReactSVG
      // onClick={() => }
      src="/greens/icons/back.svg"
      className={clsx("w-[44px]", className)}
    />
  );
};
