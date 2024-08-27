import clsx from "clsx";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Flex: React.FC<Props> = ({ className, children }) => {
  return <div className={clsx("flex items-center", className)}>{children}</div>;
};
