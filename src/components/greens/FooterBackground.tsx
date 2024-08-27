import clsx from "clsx";
import React from "react";
import { ReactSVG } from "react-svg";

interface Props {
  className?: string;
}

export const FooterBackground: React.FC<Props> = ({ className }) => {
  return (
    <ReactSVG
      src="/greens/icons/footer-background.svg"
      className={clsx("", className)}
    />
  );
};
