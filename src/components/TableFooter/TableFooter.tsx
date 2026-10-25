import React from "react";

export interface TableFooterProps {
  children?: React.ReactNode;
  disabled?: boolean;
}

export function TableFooter({ children, disabled = false }: TableFooterProps) {
  return (
    <div
      aria-disabled={disabled}
      style={{
        padding: "12px",
        opacity: disabled ? 0.5 : 1,
        backgroundColor: disabled ? "#d1d5db" : "white",
      }}
    >
      {children ?? "TableFooter component"}
    </div>
  );
}
