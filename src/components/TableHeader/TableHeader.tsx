import React from "react";

export interface TableHeaderProps {
  children?: React.ReactNode;
  disabled?: boolean;
}

export function TableHeader({ children, disabled = false }: TableHeaderProps) {
  return (
    <div
      aria-disabled={disabled}
      style={{
        padding: "12px",
        opacity: disabled ? 0.5 : 1,
        backgroundColor: disabled ? "#d1d5db" : "white",
      }}
    >
      {children ?? "TableHeader component"}
    </div>
  );
}
