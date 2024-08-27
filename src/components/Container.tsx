import clsx from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<Props> = ({ children, className }) => {
  return <div className={clsx("px-3 w-full", className)}>{children}</div>;
};
