import React from "react";

export interface DropdownProps {
  children?: React.ReactNode;
  disabled?: boolean;
}

export function Dropdown({ children, disabled = false }: DropdownProps) {
  return (
    <div
      aria-disabled={disabled}
      style={{
        padding: "12px",
        opacity: disabled ? 0.5 : 1,
        backgroundColor: disabled ? "#d1d5db" : "white",
      }}
    >
      {children ?? "Dropdown component"}
    </div>
  );
}
