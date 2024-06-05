import React from "react";
import { Label } from "flowbite-react";
import { palleteColors } from "./PaletteColorComponent";

interface Props {
  htmlFor: string;
  color: keyof typeof palleteColors;
  value?: string;
  children?: React.ReactNode;
}

export const LabelComponent: React.FC<Props> = ({
  htmlFor,
  value,
  color,
  children,
}) => {
  const style = palleteColors[color];

  return (
    <div>
      <Label htmlFor={htmlFor} value={value} className={style}>
        {children}
      </Label>
    </div>
  );
};
