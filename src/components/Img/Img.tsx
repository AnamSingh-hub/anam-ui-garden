import React from "react";

export interface ImgProps {
  children?: React.ReactNode;
  disabled?: boolean;
}

export function Img({ children, disabled = false }: ImgProps) {
  return (
    <div
      aria-disabled={disabled}
      style={{
        padding: "12px",
        opacity: disabled ? 0.5 : 1,
        backgroundColor: disabled ? "#d1d5db" : "white",
      }}
    >
      {children ?? "Img component"}
    </div>
  );
}
