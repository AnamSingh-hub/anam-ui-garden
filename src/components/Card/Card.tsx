import React from "react";

export interface CardProps {
  children?: React.ReactNode;
  disabled?: boolean;
}

export function Card({ children, disabled = false }: CardProps) {
  return (
    <div
      aria-disabled={disabled}
      style={{
        padding: "12px",
        opacity: disabled ? 0.5 : 1,
        backgroundColor: disabled ? "#d1d5db" : "white",
      }}
    >
      {children ?? "Card component"}
    </div>
  );
}
