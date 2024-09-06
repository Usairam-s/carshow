import { CustomButtonProps } from "@/types";
import React from "react";

export default function CustomButton({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) {
  return (
    <button
      className={`${containerStyles} bg-blue-600 text-white font-semibold py-2 px-4 rounded-full`}
      type={btnType || "button"}
    >
      <span>{title}</span>
    </button>
  );
}
