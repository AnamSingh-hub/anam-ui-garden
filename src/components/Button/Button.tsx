import styled from "styled-components";

export interface ButtonProps {
  label: string;
  backgroundColor?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const StyledButton = styled.button<{
  $backgroundColor: string;
}>`
  background: ${(props) => props.$backgroundColor};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 18px;
  font-size: 16px;
  cursor: pointer;

  &:disabled {
    background: #d1d5db;
    color: #6b7280;
    cursor: not-allowed;
  }
`;

export function Button({
  label,
  backgroundColor = "#2563eb",
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton
      type="button"
      $backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
}
