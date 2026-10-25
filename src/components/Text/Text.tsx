import React from "react";

export interface TextProps {
  children?: React.ReactNode;
  disabled?: boolean;
}

export function Text({ children, disabled = false }: TextProps) {
  return (
    <div
      aria-disabled={disabled}
      style={{
        padding: "12px",
        opacity: disabled ? 0.5 : 1,
        backgroundColor: disabled ? "#d1d5db" : "white",
      }}
    >
      {children ?? "Text component"}
    </div>
  );
}
