import { render, screen } from "@testing-library/react";
import { RadioButton } from "./RadioButton";

test("RadioButton renders", () => {
  render(<RadioButton>Test content</RadioButton>);
  expect(screen.getByText("Test content")).toBeInTheDocument();
});

test("RadioButton supports disabled state", () => {
  render(<RadioButton disabled>Disabled content</RadioButton>);
  expect(screen.getByText("Disabled content")).toBeInTheDocument();
});
