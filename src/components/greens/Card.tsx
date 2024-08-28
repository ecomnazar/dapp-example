import React from "react";
import clsx from "clsx";
import { ReactSVG } from "react-svg";
import { IPaymentMethod } from "../../helpers/interfaces";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  paymentMethod: IPaymentMethod;
  isActive: boolean;
}

export const Card: React.FC<Props> = ({
  className,
  paymentMethod,
  isActive,
  ...props
}) => {
  const { icon, title, width } = paymentMethod;
  return (
    <div
      className={clsx(
        "cardShadow h-[76px] rounded-[20px] flex items-center justify-between px-8 transition-all",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-x-6">
        <div className="w-[40px] flex justify-center">
          <ReactSVG src={icon} style={{ width: `${width}px` }} />
        </div>
        <h2 className="text-primary text-[20px] font-normal">{title}</h2>
      </div>
      <ReactSVG
        src="/greens/icons/brown-right-arrow.svg"
        className="w-[14px]"
      />
    </div>
  );
};
