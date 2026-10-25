import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("Button renders its label", () => {
  render(<Button label="Test button" />);
  expect(screen.getByRole("button", { name: "Test button" })).toBeInTheDocument();
});

test("Button is disabled when disabled is true", () => {
  render(<Button label="Disabled button" disabled />);
  expect(screen.getByRole("button", { name: "Disabled button" })).toBeDisabled();
});
