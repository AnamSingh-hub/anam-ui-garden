import React from "react";

export interface TableProps {
  children?: React.ReactNode;
  disabled?: boolean;
}

export function Table({ children, disabled = false }: TableProps) {
  return (
    <div
      aria-disabled={disabled}
      style={{
        padding: "12px",
        opacity: disabled ? 0.5 : 1,
        backgroundColor: disabled ? "#d1d5db" : "white",
      }}
    >
      {children ?? "Table component"}
    </div>
  );
}
