import React from "react";

export interface LabelProps {
  children?: React.ReactNode;
  disabled?: boolean;
}

export function Label({ children, disabled = false }: LabelProps) {
  return (
    <div
      aria-disabled={disabled}
      style={{
        padding: "12px",
        opacity: disabled ? 0.5 : 1,
        backgroundColor: disabled ? "#d1d5db" : "white",
      }}
    >
      {children ?? "Label component"}
    </div>
  );
}
