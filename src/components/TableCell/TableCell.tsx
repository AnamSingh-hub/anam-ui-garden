import React from "react";

export interface TableCellProps {
  children?: React.ReactNode;
  disabled?: boolean;
}

export function TableCell({ children, disabled = false }: TableCellProps) {
  return (
    <div
      aria-disabled={disabled}
      style={{
        padding: "12px",
        opacity: disabled ? 0.5 : 1,
        backgroundColor: disabled ? "#d1d5db" : "white",
      }}
    >
      {children ?? "TableCell component"}
    </div>
  );
}
