import React from "react";
import { Checkbox } from "flowbite-react";
import { palleteColors } from "./PaletteColorComponent";

interface Props {
  id: string;
  color: keyof typeof palleteColors;
}

export const CheckBoxComponenet: React.FC<Props> = ({ id, color }) => {
  const style = palleteColors[color];

  return (
    <div>
      <Checkbox id={id} className={style} />
    </div>
  );
};
