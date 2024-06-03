import React from "react";
import { Button } from "flowbite-react";

interface Props {
  color: string;
  size: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactNode;
}

export const ButtonComponent: React.FC<Props> = ({
  color,
  size,
  type,
  className,
  onClick,
  children,
}) => {
  return (
    <div>
      <Button
        color={color}
        size={size}
        type={type}
        className={className}
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  );
};
