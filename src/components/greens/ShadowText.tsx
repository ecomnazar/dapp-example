import clsx from "clsx";
import React from "react";

interface Props {
  title: string;
  shadowColor: string;
  shadowSize: string;
  fontSize?: `${string}px`;
  className?: string;
  parentClassName?: string;
}

// FIX
export const ShadowText: React.FC<Props> = ({
  title,
  shadowColor,
  shadowSize,
  fontSize = "18px",
  className,
  parentClassName,
}) => {
  return (
    <div className={clsx("relative", parentClassName)}>
      <h4
        style={{
          WebkitTextStroke: `${shadowSize}px ${shadowColor}`,
          fontSize: fontSize,
        }}
        className={clsx(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full",
          className
        )}
      >
        {title}
      </h4>
      <h4
        style={{ fontSize: fontSize }}
        className={clsx("relative  w-full text-white text-shadow", className)}
      >
        {title}
      </h4>
    </div>
  );
};
