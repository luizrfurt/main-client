import React from "react";
import { TextInput } from "flowbite-react";

interface Props {
  value: string;
  sizing: string;
  type: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
}

export const InputComponent: React.FC<Props> = ({
  value,
  sizing,
  type,
  placeholder,
  onChange,
  required,
}) => {
  return (
    <div>
      <TextInput
        value={value}
        sizing={sizing}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};
