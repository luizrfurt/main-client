import React from "react";
import Link from "next/link";
import { palleteColors } from "./PaletteColorComponent";

interface Props {
  color: keyof typeof palleteColors;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  href: string;
  children?: React.ReactNode;
}

export const LinkComponent: React.FC<Props> = ({
  color,
  onClick,
  href,
  children,
}) => {
    const style = palleteColors[color];

  return (
    <div>
      <Link className={style} href={href} onClick={onClick}>{children}</Link>
    </div>
  );
};
