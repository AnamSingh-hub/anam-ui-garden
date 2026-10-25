import React from "react";

export interface TableRowProps {
  children?: React.ReactNode;
  disabled?: boolean;
}

export function TableRow({ children, disabled = false }: TableRowProps) {
  return (
    <div
      aria-disabled={disabled}
      style={{
        padding: "12px",
        opacity: disabled ? 0.5 : 1,
        backgroundColor: disabled ? "#d1d5db" : "white",
      }}
    >
      {children ?? "TableRow component"}
    </div>
  );
}
