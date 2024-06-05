import React from "react";
import { Button } from "flowbite-react";
import { palleteColors } from "./PaletteColorComponent";

interface Props {
  color: keyof typeof palleteColors;
  size: string;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactNode;
}

export const ButtonComponent: React.FC<Props> = ({
  color,
  size,
  type,
  onClick,
  children,
}) => {
  const style = palleteColors[color];

  return (
    <div>
      <Button size={size} type={type} className={style} onClick={onClick}>
        {children}
      </Button>
    </div>
  );
};
