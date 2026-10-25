import React from "react";

export interface HeroImageProps {
  children?: React.ReactNode;
  disabled?: boolean;
}

export function HeroImage({ children, disabled = false }: HeroImageProps) {
  return (
    <div
      aria-disabled={disabled}
      style={{
        padding: "12px",
        opacity: disabled ? 0.5 : 1,
        backgroundColor: disabled ? "#d1d5db" : "white",
      }}
    >
      {children ?? "HeroImage component"}
    </div>
  );
}
