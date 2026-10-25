import React from "react";

export interface RadioButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
}

export function RadioButton({ children, disabled = false }: RadioButtonProps) {
  return (
    <div
      aria-disabled={disabled}
      style={{
        padding: "12px",
        opacity: disabled ? 0.5 : 1,
        backgroundColor: disabled ? "#d1d5db" : "white",
      }}
    >
      {children ?? "RadioButton component"}
    </div>
  );
}
