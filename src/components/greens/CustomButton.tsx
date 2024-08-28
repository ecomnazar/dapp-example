import clsx from "clsx";
import React from "react";
import { ShadowText } from "./ShadowText";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  title: string;
}

export const CustomButton: React.FC<Props> = ({
  className,
  title,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "w-[150px] pb-[2.5px] border-[1px] border-[#2A5D24] greensCustomButtonBgShadow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !rounded-[14px]",
        className
      )}
      {...props}
    >
      <div
        className={clsx(
          "flex items-center justify-center greensCustomButtonFrontDiv rounded-[14px]"
        )}
      >
        <ShadowText
          title={title}
          shadowColor={"#285824"}
          shadowSize={"3"}
          fontSize={"19px"}
        />
      </div>
    </div>
  );
};
