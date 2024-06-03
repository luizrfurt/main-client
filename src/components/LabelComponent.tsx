import React from "react";
import { Label } from "flowbite-react";

interface Props {
  htmlFor: string;
  value?: string;
  className?: string;
  children?: React.ReactNode;
}

export const LabelComponent: React.FC<Props> = ({
  htmlFor,
  value,
  className,
  children,
}) => {
  return (
    <div>
      <Label htmlFor={htmlFor} value={value} className={className}>
        {children}
      </Label>
    </div>
  );
};
